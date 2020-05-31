import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumb from './index';

describe('Breadcrumb', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Breadcrumb>
          <a>list</a>
          <a>list</a>
          <a>list</a>
        </Breadcrumb>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Breadcrumb props', () => {
  it('className base', () => {
    const classArray = renderer
      .create(
        <Breadcrumb className={'addClass'}>
          <a>list</a>
          <a>list</a>
          <a>list</a>
        </Breadcrumb>
      )
      .toJSON()
      .props.className.split(' ');
    expect('root').toMatch(classArray[0]);
    expect('addClass').toMatch(classArray[1]);
  });
});
