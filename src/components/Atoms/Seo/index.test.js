import {SeoContainer} from './index'
import {useStaticQuery} from 'gatsby'
import siteData from '../../../../__mocks__/data/site.json'
import fileData from '../../../../__mocks__/data/file.json'

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    ...siteData,
    ...fileData,
  }))
})

describe('Seo', () => {
  const presenter = props => props

  it('descriptionがない場合、metaDescriptionはデフォルトの値', () => {
    const {metaDescription} = SeoContainer({
      presenter,
    })
    expect(metaDescription).toEqual(
      'Progate JourneyはWebプロダクトを開発するための学習ロードマップです。ロードマップを活用して学習の不安を自信に変えよう。'
    )
  })

  it('descriptionがある場合、metaDescriptionはdescriptionの値', () => {
    const {metaDescription} = SeoContainer({
      presenter,
      description: 'description',
    })
    expect(metaDescription).toEqual('description')
  })

  it('imageがない場合、metaImageはドメイン＋デフォルトの画像URL', () => {
    const {metaImage} = SeoContainer({
      presenter,
    })
    expect(metaImage).toEqual(
      'https://journey.prog-8.com/static/4906b48933c68335808e7b358772aea9/ogpDefault.png'
    )
  })

  it('imageがある場合、metaImageはドメイン＋imageの画像URL', () => {
    const {metaImage} = SeoContainer({
      presenter,
      image: '/test.png',
    })
    expect(metaImage).toEqual('https://journey.prog-8.com/test.png')
  })

  it('slugがない場合、metaURLはドメインURL', () => {
    const {metaURL} = SeoContainer({
      presenter,
    })
    expect(metaURL).toEqual('https://journey.prog-8.com')
  })

  it('slugがある場合、metaURLはドメイン＋slugのURL', () => {
    const {metaURL} = SeoContainer({
      presenter,
      slug: '/scenes/test',
    })
    expect(metaURL).toEqual('https://journey.prog-8.com/scenes/test')
  })

  it('siteTitleは、site.siteMetadata.titleの値', () => {
    const {siteTitle} = SeoContainer({
      presenter,
    })
    expect(siteTitle).toEqual('Progate Journey')
  })
})
