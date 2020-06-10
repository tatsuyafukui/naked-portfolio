import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { containPresenter } from '../../utils/HoC'

const LinkPresenter = ({ tag: Tag, ...props }) => <Tag {...props} />

/**
 * 内部リンクか外部リンクかでタグを出しわける
 * 内部ならGatsbyのLinkタグ、外部ならaタグ
 * 外部リンクの場合はGatsbyのLinkタグ特有のPropsを削除
 */
export const LinkContainer = ({ presenter, ...props }) => {
  // 内部リンクかの判定: スラッシュが1つだけで始まれば内部リンク、それ以外はすべて外部リンク
  const internal = /^\/(?!\/)/.test(props.to)
  let tag

  if (internal) {
    tag = GatsbyLink
  } else {
    tag = 'a'
    props.href = props.to
    delete props.to
    delete props.activeClassName
    delete props.partiallyActive
  }

  return presenter({ tag, ...props })
}

const Link = containPresenter(LinkContainer, LinkPresenter)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.object,
}

export default Link
