import React from 'react'
import Ogp, {getSummaryPosition, OgpContainer} from './index'
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
  const presenter = props => props
  it('ISBNがない場合はOgpDescriptionをレンダリングする', () => {
    const {ogpDescription} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'url',
      image: data.square.fluid,
      presenter,
    })
    const wrapper = mount(ogpDescription)
    expect(wrapper.name()).toEqual('OgpDescription')
  })

  it('ISBNがあるときはAmazonOgpDescriptionをレンダリングする', () => {
    const {ogpDescription} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'url',
      image: data.square.fluid,
      isbn: '4822281515',
      presenter,
    })
    const wrapper = mount(ogpDescription)
    expect(wrapper.name()).toEqual('AmazonOgpDescription')
  })

  it('isMobile = trueかつisbn = trueの場合は、styles.multilineTextTruncateを返す', () => {
    const {truncate} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'url',
      image: data.square.fluid,
      isbn: '4822281515',
      isMobile: true,
      presenter,
    })
    expect(truncate).toEqual('multilineTextTruncate')
  })

  it('isMobile = falseかつisbn = trueの場合は、styles.multilineTextTruncateを返す', () => {
    const {truncate} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'url',
      image: data.square.fluid,
      isbn: '4822281515',
      isMobile: false,
      presenter,
    })
    expect(truncate).toEqual('multilineTextTruncate')
  })

  it('isMobile = falseかつisbn = falseの場合は、styles.textTruncateを返す', () => {
    const {truncate} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'url',
      image: data.square.fluid,
      isbn: false,
      isMobile: false,
      presenter,
    })
    expect(truncate).toEqual('textTruncate')
  })

  it('isMobile = trueかつisbn = falseの場合は、styles.multilineTextTruncateを返す', () => {
    const {truncate} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'url',
      image: data.square.fluid,
      isbn: false,
      isMobile: true,
      presenter,
    })
    expect(truncate).toEqual('multilineTextTruncate')
  })
})
