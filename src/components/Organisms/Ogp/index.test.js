import {OgpContainer} from './index'
import data from '../../../mock/data/gatsby-img.json'
import {mount} from 'enzyme'

describe('Ogp', () => {
  const presenter = props => props
  it('ISBNがない場合はOgpDescriptionをレンダリングする', () => {
    const {ogpDescription} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'https://prog-8.com/',
      image: data.square,
      presenter,
    })
    const wrapper = mount(ogpDescription)
    expect(wrapper.name()).toEqual('OgpDescription')
  })

  it('ISBNがあるときはAmazonOgpDescriptionをレンダリングする', () => {
    const {ogpDescription} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'https://prog-8.com/',
      image: data.square,
      isbn: '4822281515',
      presenter,
    })
    const wrapper = mount(ogpDescription)
    expect(wrapper.name()).toEqual('AmazonOgpDescription')
  })

  it('isMobile = trueかつisbn = trueの場合は、styles.multiLineTextTruncateを返す', () => {
    const {truncateLine} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'https://prog-8.com/',
      image: data.square,
      isbn: '4822281515',
      isMobile: true,
      presenter,
    })
    expect(truncateLine).toEqual('multiLineTextTruncate')
  })

  it('isMobile = falseかつisbn = trueの場合は、styles.multiLineTextTruncateを返す', () => {
    const {truncateLine} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'https://prog-8.com/',
      image: data.square,
      isbn: '4822281515',
      isMobile: false,
      presenter,
    })
    expect(truncateLine).toEqual('multiLineTextTruncate')
  })

  it('isMobile = falseかつisbn = falseの場合は、styles.singleLineTextTruncateを返す', () => {
    const {truncateLine} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'https://prog-8.com/',
      image: data.square,
      isbn: false,
      isMobile: false,
      presenter,
    })
    expect(truncateLine).toEqual('singleLineTextTruncate')
  })

  it('isMobile = trueかつisbn = falseの場合は、styles.multiLineTextTruncateを返す', () => {
    const {truncateLine} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'https://prog-8.com/',
      image: data.square,
      isbn: false,
      isMobile: true,
      presenter,
    })
    expect(truncateLine).toEqual('multiLineTextTruncate')
  })
})
