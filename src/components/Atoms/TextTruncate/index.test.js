import React from 'react'
import {TextTruncateContainer} from './index'

describe('Overwrap', () => {
  const presenter = props => props
  const TEST_TEXT = 'x'.repeat(100)

  it('maxCharsを超えていた場合、maxCharsに指定した文字数のあとを省略：境界値（下限）', () => {
    const {children} = TextTruncateContainer({
      presenter,
      maxChars: 0,
      children: TEST_TEXT,
      truncateText: '続きを読む',
    })
    expect(children).toEqual([' ... ', '続きを読む'])
  })

  it('maxCharsを超えていた場合、maxCharsに指定した文字数のあとを省略：境界値（上限）', () => {
    const {children} = TextTruncateContainer({
      presenter,
      maxChars: 99,
      children: TEST_TEXT,
      truncateText: '続きを読む',
    })
    expect(children).toEqual(['x'.repeat(99) + ' ... ', '続きを読む'])
  })

  it('maxCharsを超えていなければ何もしない：境界値（下限）', () => {
    const {children} = TextTruncateContainer({
      presenter,
      maxChars: 100,
      children: TEST_TEXT,
      truncateText: '続きを読む',
    })
    expect(children).toBe(TEST_TEXT)
  })

  it('maxCharsが不適切な値の場合は何もしない', () => {
    const {children} = TextTruncateContainer({
      presenter,
      maxChars: -1,
      children: TEST_TEXT,
      truncateText: '続きを読む',
    })
    expect(children).toBe(TEST_TEXT)
  })

  it('childrenが文字列以外の場合は何もしない', () => {
    const {children} = TextTruncateContainer({
      presenter,
      maxChars: 1,
      children: <a>{TEST_TEXT}</a>,
    })
    expect(children).toEqual(<a>{TEST_TEXT}</a>)
  })

  it('openの場合は何もしない', () => {
    const {children} = TextTruncateContainer({
      presenter,
      maxChars: 1,
      children: TEST_TEXT,
      open: true,
    })
    expect(children).toBe(TEST_TEXT)
  })
})
