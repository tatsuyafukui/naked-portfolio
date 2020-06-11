import React from 'react';
import { insertSeparators } from './index';

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
});
