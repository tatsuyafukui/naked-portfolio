import React from 'react'
import {Context as ResponsiveContext} from 'react-responsive'
import LongDescription from './index'
import {mount} from 'enzyme'

describe('LongDescriptionContainer', () => {
  const TEST_DESCRIPTION = 'x'.repeat(100)
  it('PCの場合はopenは常にtrue', () => {
    const wrapper = mount(
      <ResponsiveContext.Provider value={{type: 'screen', width: 768}}>
        <LongDescription>{TEST_DESCRIPTION}</LongDescription>
      </ResponsiveContext.Provider>
    )
    expect(wrapper.find('p.long').children().props().open).toBeTruthy()
  })

  it('SPの場合はopenはデフォルトはfalse. ボタンをClickしたらtrue', () => {
    const wrapper = mount(
      <ResponsiveContext.Provider value={{type: 'screen', width: 767}}>
        <LongDescription>{TEST_DESCRIPTION}</LongDescription>
      </ResponsiveContext.Provider>
    )
    expect(wrapper.find('p.long').children().props().open).toBeFalsy()
    wrapper.find('button').simulate('click')
    expect(wrapper.find('p.long').children().props().open).toBeTruthy()
  })
})
