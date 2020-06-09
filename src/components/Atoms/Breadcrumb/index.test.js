import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { BreadcrumbContainer, insertSeparators, renderItemsBeforeAndAfter } from './index';

Enzyme.configure({ adapter: new Adapter() });

describe('BreadcrumbContainer', () => {
  const items = [
    <li>1</li>,
    <li>2</li>,
    <li>3</li>
  ];

  it('Itemの間にseparatorを入れる', () => {
    const result = insertSeparators(items, "/");
    expect(result).toEqual([
      <li>1</li>,
      <li aria-hidden key={`separator-0`} className={'separator'}>/</li>,
      <li>2</li>,
      <li aria-hidden key={`separator-1`} className={'separator'}>/</li>,
      <li>3</li>,
    ]);
  });

  it('itemsBeforeCollapse + itemsAfterCollapse >= allItems.lengthならallItemsを返す', () => {
    const onClick = jest.fn();
    const result = renderItemsBeforeAndAfter({items, itemsBeforeCollapse: 2, itemsAfterCollapse: 2}, onClick);
    expect(result).toEqual(items);
  });

  it('itemsBeforeCollapse + itemsAfterCollapse < allItems.lengthなら間を省略', () => {
    const onClick = jest.fn();
    const result = renderItemsBeforeAndAfter({items, itemsBeforeCollapse: 1, itemsAfterCollapse: 1}, onClick);
    expect(result).toEqual([
      <li>1</li>,
      <li key={"ellipsis"} className={'ellipsis'}>
        <button onClick={onClick}>...</button>
      </li>,
      <li>3</li>,
    ]);
  });

  it('省略ボタンのクリックをコールバックする', () => {
    const onClick = jest.fn();
    const result = renderItemsBeforeAndAfter({items, itemsBeforeCollapse: 1, itemsAfterCollapse: 1}, onClick);
    const wrapper = shallow(result[1].props.children);
    wrapper.simulate('click');
    expect(onClick.mock.calls.length).toBe(1)
  });

});
