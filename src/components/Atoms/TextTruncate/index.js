import React from 'react'
import PropTypes from 'prop-types'
import {containPresenter} from '../../utils/HoC'

const TextTruncatePresenter = ({children}) => <>{children}</>

export const TextTruncateContainer = ({
  maxChars,
  truncateText,
  open,
  children,
  presenter,
}) => {
  if (
    !open &&
    typeof children === 'string' &&
    maxChars >= 0 &&
    children.length > maxChars
  ) {
    children = children.slice(0, maxChars) + ' ... '
    children = React.Children.toArray(children).push(truncateText)
  }

  return presenter({children})
}

const TextTruncate = containPresenter(
  TextTruncateContainer,
  TextTruncatePresenter
)

TextTruncate.propTypes = {
  children: PropTypes.string,
  maxChars: PropTypes.number,
  open: PropTypes.bool,
}

TextTruncate.defaultProps = {
  maxChars: 50,
  open: false,
}

export default TextTruncate
