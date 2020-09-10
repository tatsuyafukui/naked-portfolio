import React from 'react'
import {Context as ResponsiveContext} from 'react-responsive'
import LongDescription from './index'
import {mount} from 'enzyme'

describe('LongDescriptionContainer', () => {
  const TEST_DESCRIPTION = 'x'.repeat(100)
  it('PCの場合はisExpandedは常にtrue', () => {
    const wrapper = mount(
      <ResponsiveContext.Provider value={{type: 'screen', width: 768}}>
        <LongDescription>{TEST_DESCRIPTION}</LongDescription>
      </ResponsiveContext.Provider>
    )

    expect(
      wrapper.contains(<p className='txt info visualLevel1 '>続きを読む</p>)
    ).toEqual(false)
  })

  it('SPの場合はisExpandedはデフォルトはfalse. ボタンをClickしたらtrue', () => {
    const wrapper = mount(
      <ResponsiveContext.Provider value={{type: 'screen', width: 767}}>
        <LongDescription>{TEST_DESCRIPTION}</LongDescription>
      </ResponsiveContext.Provider>
    )
    expect(
      wrapper.contains(<p className='txt info visualLevel1 '>続きを読む</p>)
    ).toEqual(true)

    wrapper.find('button').simulate('click')

    expect(
      wrapper.contains(<p className='txt info visualLevel1 '>続きを読む</p>)
    ).toEqual(false)
  })
})
