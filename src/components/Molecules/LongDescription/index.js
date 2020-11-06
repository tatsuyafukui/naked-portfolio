import React, {useState} from 'react'
import styles from './styles.module.scss'
import Txt, {InfoTxt} from '../../Atoms/Txt'
import PropTypes from 'prop-types'
import {useMediaQuery} from 'react-responsive'
import {MEDIA_QUERY_MD} from '../../../constants'
import {containPresenter} from '../../utils/HoC'

const LongDescriptionPresenter = ({
  clampCount,
  children,
  truncateButton,
  className,
  ...props
}) => (
  <Txt lineHeightLevel={5} className={className} {...props}>
    <span
      className={styles.textTruncate}
      style={clampCount}
      dangerouslySetInnerHTML={{__html: children}}
    />
    {truncateButton}
  </Txt>
)

LongDescriptionPresenter.propTypes = {
  clampCount: PropTypes.object,
  children: PropTypes.string.isRequired,
  truncateButton: PropTypes.node,
  className: PropTypes.string,
}

const LongDescriptionContainer = ({
  lineClamp,
  truncateText,
  children,
  presenter,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery({query: MEDIA_QUERY_MD})
  const clickOpenHandler = () => {
    setOpen(true)
  }
  const isExpanded = !isMobile || open
  const clampCount = {
    WebkitLineClamp: !isExpanded ? lineClamp : 'unset',
  }
  const truncateButton = !isExpanded && (
    <button key={'read-more'} onClick={clickOpenHandler}>
      <InfoTxt>{truncateText}</InfoTxt>
    </button>
  )

  return presenter({clampCount, children, truncateButton, ...props})
}

const LongDescription = containPresenter(
  LongDescriptionContainer,
  LongDescriptionPresenter
)

export default LongDescription

LongDescription.propTypes = {
  children: PropTypes.string.isRequired,
  truncateText: PropTypes.string,
  lineClamp: PropTypes.number,
}

LongDescription.defaultProps = {
  truncateText: '続きを読む',
  lineClamp: 3,
}
