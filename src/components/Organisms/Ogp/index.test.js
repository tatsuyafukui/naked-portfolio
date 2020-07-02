import React from 'react'
import Ogp, {getSummary} from './index'
import data from '../../../mock/data/gatsby-img.json'
import styles from './styles.module.scss'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

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
    const wrapper = mount(
      <Ogp title={'Title'} description={'description'} url={'url'} />
    )
    expect(wrapper.find(`div.${styles.right}`)).toHaveLength(0)
  })

  it('imageがある場合はMediaObjectLayoutをレンダリングする', () => {
    const wrapper = mount(
      <Ogp
        title={'Title'}
        description={'description'}
        url={'url'}
        image={data.square.fluid}
      />
    )
    expect(wrapper.find(`div.${styles.right}`)).toHaveLength(1)
  })
})
