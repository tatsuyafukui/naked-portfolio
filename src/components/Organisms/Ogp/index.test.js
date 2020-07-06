import React from 'react'
import Ogp, {getSummaryPosition, OgpContainer} from './index'
import data from '../../../mock/data/gatsby-img.json'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('関数getSummaryPosition', () => {
  it('デフォルトの返り値はright', () => {
    const result = getSummaryPosition('other')
    expect(result).toBe('right')
  })

  it('twitterCardがsummary_large_imageならtopを返す', () => {
    const result = getSummaryPosition('summary_large_image')
    expect(result).toBe('top')
  })

  it('twitterCardがsummaryならleftを返す', () => {
    const result = getSummaryPosition('summary')
    expect(result).toBe('left')
  })
})

describe('Ogp', () => {
  const presenter = props => props

  it('ISBNがない場合はSummaryOgpをレンダリングする', () => {
    const {ogp} = OgpContainer({
      presenter,
      title: 'Title',
      description: 'description',
      url: 'url',
      image: data.square.fluid,
    })
    const wrapper = mount(ogp)
    expect(wrapper.find(`div.right`)).toHaveLength(1)
    expect(wrapper.find(`div.amazonOgp`)).toHaveLength(0)
  })

  it('SummaryOgpのimageがない場合はMediaObjectLayoutをレンダリングしない', () => {
    const {ogp} = OgpContainer({
      presenter,
      title: 'Title',
      description: 'description',
      url: 'url',
    })
    const wrapper = mount(ogp)
    expect(wrapper.find(`div.right`)).toHaveLength(0)
    expect(wrapper.find(`div.ogBody`)).toHaveLength(1)
  })

  it('ISBNがあるときはAmazonOgpをレンダリングする', () => {
    const {ogp} = OgpContainer({
      presenter,
      title: 'Title',
      description: 'description',
      url: 'url',
      image: data.square.fluid,
      isbn: '4822281515',
    })
    const wrapper = mount(ogp)
    expect(wrapper.find(`div.amazonOgp`)).toHaveLength(1)
  })
})
