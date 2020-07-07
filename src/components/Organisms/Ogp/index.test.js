import React from 'react'
import Ogp, {getSummaryPosition} from './index'
import data from '../../../mock/data/gatsby-img.json'
import {mount} from 'enzyme'

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
  it('ISBNがない場合はOgpDescriptionをレンダリングする', () => {
    const wrapper = mount(
      <Ogp
        title={'Title'}
        description={'description'}
        url={'url'}
        image={data.square.fluid}
      />
    )
    expect(wrapper.find('p.truncateText')).toHaveLength(2)
    expect(wrapper.find('div.ogUrl')).toHaveLength(1)
  })

  it('ISBNがあるときはAmazonOgpDescriptionをレンダリングする', () => {
    const wrapper = mount(
      <Ogp
        title={'Title'}
        description={'description'}
        url={'url'}
        image={data.square.fluid}
        isbn={'4822281515'}
      />
    )
    expect(wrapper.find('p.amazonOgpDescription')).toHaveLength(1)
    expect(wrapper.find('p.amazonOgpDescription').text()).toEqual(
      'Amazonで詳細を見る'
    )
  })
})
