import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const BreadcrumbPresenter = ({tag: Tag, children, ...props}) => (
  <Tag {...props}>
    <ol className={styles.ol}>{children}</ol>
  </Tag>
)

BreadcrumbPresenter.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
}

/**
 * コンテナー
 * childrenの要素数に応じてリストを生成してpresenterに渡す
 */
export const BreadcrumbContainer = ({
  children,
  tag,
  separator,
  presenter,
  ...props
}) => {
  const items = React.Children.toArray(children)
    .filter(child => React.isValidElement(child))
    .map((child, index) => (
      <li className={styles.li} key={`child-${index}`}>
        {child}
      </li>
    ))

  return presenter({
    tag,
    children: insertSeparators(items, separator),
    ...props,
  })
}

const Breadcrumb = containPresenter(BreadcrumbContainer, BreadcrumbPresenter)

Breadcrumb.defaultProps = {
  separator: '/',
  tag: 'nav',
}

export default Breadcrumb

/**
 * ヘルパー関数
 * メニューの間にセパレイト文字をいれる
 * @param items
 * @param separator
 */
export const insertSeparators = (items, separator) => {
  return items.reduce((acc, current, index) => {
    if (index < items.length - 1) {
      acc = acc.concat(
        current,
        <li
          aria-hidden={true}
          key={`separator-${index}`}
          className={styles.separator}
        >
          {separator}
        </li>
      )
    } else {
      acc.push(current)
    }

    return acc
  }, [])
}
