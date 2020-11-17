import {OgpContainer} from './index'
import data from '../../../../__mocks__/data/gatsby-img.json'
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

  it('isMobile = trueかつisbn = trueの場合は、styles.multilineTextTruncateを返す', () => {
    const {truncate} = OgpContainer({
      title: 'Title',
      description: 'description',
      url: 'https://prog-8.com/',
      image: data.square,
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
      url: 'https://prog-8.com/',
      image: data.square,
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
      url: 'https://prog-8.com/',
      image: data.square,
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
      url: 'https://prog-8.com/',
      image: data.square,
      isbn: false,
      isMobile: true,
      presenter,
    })
    expect(truncate).toEqual('multilineTextTruncate')
  })
})
