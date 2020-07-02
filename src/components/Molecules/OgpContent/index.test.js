import React from 'react'
import {OgpContentContainer} from './index'
import Enzyme, {shallow, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

describe('OgpContent', () => {
  const presenter = props => props

  it('書籍のときはURLを見せない', () => {
    const {url} = OgpContentContainer({
      presenter,
      isBook: true,
      url: 'url',
    })
    expect(url).toBeNull()
  })

  it('書籍以外のときはURLを見せる', () => {
    const {url} = OgpContentContainer({
      presenter,
      isBook: false,
      url: 'url',
    })
    const wrapper = shallow(url)
    expect(wrapper.find('div.ogUrl')).toHaveLength(1)
  })

  it('書籍のときはdescriptionを「Amazonで詳細を見る」に上書き', () => {
    const {description} = OgpContentContainer({
      presenter,
      isBook: true,
      url: 'url',
      description: 'description',
    })
    const wrapper = mount(description)
    expect(wrapper.find('.navigationLink').first().text()).toEqual(
      'Amazonで詳細を見る'
    )
  })
})
