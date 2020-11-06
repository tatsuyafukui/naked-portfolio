import {MediaObjectLayoutContainer} from './index'

describe('MediaObjectLayoutContainer', () => {
  const presenter = props => props

  it('不適切なsummaryを渡した場合はsummaryにleftを代入', () => {
    const {summary} = MediaObjectLayoutContainer({
      presenter,
      summary: 'incorrect',
    })
    expect(summary).toBe('left')
  })
})
