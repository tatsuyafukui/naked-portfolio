import React from 'react'
import OgpList from './index'
import data from '../../../mock/data/recommended.json'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('OgpList', () => {
  it('ogpがないサイトはリンクのみ表示する', () => {
    const wrapper = mount(<OgpList ogpList={[data.notOgp]} />)
    expect(wrapper.find(`div.ogContent`)).toHaveLength(0)
  })

  it('ogpがあるサイトはOGPコンポーネントを表示する', () => {
    const ogpList = [data.bookOgp, data.progateOgp, data.summaryOgp]

    const wrapper = mount(<OgpList ogpList={ogpList} />)
    expect(wrapper.find(`div.ogContent`)).toHaveLength(3)
  })
})
