import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import {LinkContainer} from './index'

describe('LinkContainer', () => {
  const presenter = props => props
  const InternalLink = '/'
  const ExternalLink = 'https://prog-8.com'

  it('内部リンクのときはGatsbyのLinkタグを使う', () => {
    const {tag} = LinkContainer({
      presenter,
      to: InternalLink,
    })
    expect(tag).toBe(GatsbyLink)
  })

  it('内部リンクのときはGatsbyLink特有のPropsをそのまま返す', () => {
    const {to, activeClassName, partiallyActive} = LinkContainer({
      presenter,
      to: InternalLink,
      activeClassName: 'active',
      partiallyActive: {color: 'red'},
    })
    expect(to).toBe(InternalLink)
    expect(activeClassName).toBe('active')
    expect(partiallyActive).toEqual({color: 'red'})
  })

  it('外部リンクのときはaタグを使い、toをhrefに変換', () => {
    const {tag, href} = LinkContainer({
      presenter,
      to: ExternalLink,
    })
    expect(tag).toBe('a')
    expect(href).toBe(ExternalLink)
  })

  it('外部リンクのときはGatsbyLink特有のPropsを削除する', () => {
    const {to, activeClassName, partiallyActive} = LinkContainer({
      presenter,
      to: ExternalLink,
      activeClassName: 'active',
      partiallyActive: {color: 'red'},
    })
    expect(to).toBeUndefined()
    expect(activeClassName).toBeUndefined()
    expect(partiallyActive).toBeUndefined()
  })
})
