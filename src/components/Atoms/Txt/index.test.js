import React from 'react'
import renderer from 'react-test-renderer'
import Txt, {TxtContainer} from './index'

describe('Txt', () => {
  it('Renders correctly', () => {
    const tree = renderer.create(<Txt>Txt</Txt>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('TxtContainer', () => {
  const presenter = props => props

  it('１未満のvisualLevelは１とする', () => {
    const {visualLevel} = TxtContainer({
      presenter,
      visualLevel: 0,
    })
    expect(visualLevel).toBe(1)
  })

  it('5以上のvisualLevelは4とする', () => {
    const {visualLevel} = TxtContainer({
      presenter,
      visualLevel: 5,
    })
    expect(visualLevel).toBe(4)
  })

  it('１未満のlineHeightLevelは１とする', () => {
    const {lineHeightLevel} = TxtContainer({
      presenter,
      lineHeightLevel: 0,
    })
    expect(lineHeightLevel).toBe(1)
  })

  it('6以上のlineHeightLevelは5とする', () => {
    const {lineHeightLevel} = TxtContainer({
      presenter,
      lineHeightLevel: 6,
    })
    expect(lineHeightLevel).toBe(5)
  })
})
