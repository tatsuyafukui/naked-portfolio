import React from 'react'
import {MediaObjectLayoutContainer} from './index'
import {shallow} from 'enzyme'

describe('MediaObjectLayoutContainer', () => {
  const presenter = props => props

  it('不適切なsummaryを渡した場合はsummaryにleftを代入', () => {
    const {summary} = MediaObjectLayoutContainer({
      presenter,
      summary: 'incorrect',
    })
    expect(summary).toBe('left')
  })

  it('hasImageがfalseなら画像を表示しない', () => {
    const {children, role} = MediaObjectLayoutContainer({
      presenter,
      summary: 'incorrect',
      hasImage: false,
      children: [<div>image</div>, <div>body</div>],
    })
    expect(role).toBe('noImage')
    expect(children.length).toBe(1)
    expect(shallow(children[0]).text()).toEqual('body')
  })
})
