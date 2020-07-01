import React from 'react'
import {OgpContentContainer} from './index'
import styles from './styles.module.scss'
import NavigationLink from '../NavigationLink'

describe('OgpContent', () => {
  const presenter = props => props

  it('書籍のときはURLを見せない', () => {
    const {ogUrlClass} = OgpContentContainer({
      presenter,
      isBook: true,
      url: 'url',
    })
    expect(ogUrlClass).toBe(styles.hidden)
  })

  it('書籍以外のときはURLを見せる', () => {
    const {url, ogUrlClass} = OgpContentContainer({
      presenter,
      isBook: false,
      url: 'url',
    })
    expect(url).toBe('url')
    expect(ogUrlClass).toBe(styles.ogUrl)
  })

  it('書籍のときはdescriptionを「Amazonで詳細を見る」に上書き', () => {
    const {description} = OgpContentContainer({
      presenter,
      isBook: true,
      url: 'url',
      description: 'description',
    })
    expect(description).toEqual(
      <NavigationLink className={styles.navigationLink} to={'url'}>
        Amazonで詳細をみる
      </NavigationLink>
    )
  })
})
