import React from 'react'
import OgpList from './index'
import data from '../../../../__mocks__/data/recommended.json'
import {mount} from 'enzyme'

describe('OgpList', () => {
  it('ogpがないサイトはリンクのみ表示する', () => {
    const wrapper = mount(<OgpList ogpList={[data.notOgp]} />)
    expect(wrapper.find(`div.ogBody`)).toHaveLength(0)
  })

  it('ogpがあるサイトはOGPコンポーネントを表示する', () => {
    const ogpList = [data.bookOgp, data.largeOgp, data.summaryOgp]

    const wrapper = mount(<OgpList ogpList={ogpList} />)
    expect(wrapper.find(`div.ogBody`)).toHaveLength(3)
  })
})
