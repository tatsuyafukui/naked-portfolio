import React from 'react'
import Ogp, {getSummary} from './index'
import renderer from 'react-test-renderer'

describe('関数getSummary', () => {
  it('デフォルトの返り値はright', () => {
    const result = getSummary('other')
    expect(result).toBe('right')
  })

  it('twitterCardがsummary_large_imageならtopを返す', () => {
    const result = getSummary('summary_large_image')
    expect(result).toBe('top')
  })

  it('twitterCardがsummaryならleftを返す', () => {
    const result = getSummary('summary')
    expect(result).toBe('left')
  })
})

describe('Ogp', () => {
  it('imageが無い場合はMediaObjectLayoutをレンダリングしない', () => {
    const tree = renderer
      .create(<Ogp title={'Title'} description={'description'} url={'url'} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
