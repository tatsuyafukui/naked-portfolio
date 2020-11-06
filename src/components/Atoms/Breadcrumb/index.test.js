import React from 'react'
import {insertSeparators} from './index'

describe('BreadcrumbContainer', () => {
  const items = [<li key={1}>1</li>, <li key={2}>2</li>, <li key={3}>3</li>]

  it('Itemの間にseparatorを入れる', () => {
    const result = insertSeparators(items, '/')
    expect(result).toEqual([
      <li key={1}>1</li>,
      <li aria-hidden={true} key='separator-0' className='separator'>
        /
      </li>,
      <li key={2}>2</li>,
      <li aria-hidden={true} key='separator-1' className='separator'>
        /
      </li>,
      <li key={3}>3</li>,
    ])
  })
})
