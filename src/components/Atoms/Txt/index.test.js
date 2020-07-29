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

  it('１未満のレベルは１とする', () => {
    const {visualLevel} = TxtContainer({
      presenter,
      visualLevel: 0,
    })
    expect(visualLevel).toBe(1)
  })

  it('5以上のレベルは4とする', () => {
    const {visualLevel} = TxtContainer({
      presenter,
      visualLevel: 5,
    })
    expect(visualLevel).toBe(4)
  })
})
