import React, {useState} from 'react'
import Txt, {InfoTxt} from '../../Atoms/Txt'
import TextTruncate from '../../Atoms/TextTruncate'
import styles from './styles.module.scss'
import PropTypes from 'prop-types'
import {useMediaQuery} from 'react-responsive'
import {MD_QUERY} from '../../constants'

const LongDescription = ({maxChars, truncateText, children}) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery({query: MD_QUERY})

  const clickOpenHandler = () => {
    setOpen(true)
  }

  return (
    <Txt>
      <TextTruncate
        open={!isMobile || open}
        maxChars={maxChars}
        truncateText={
          <button
            key={'truncateText'}
            className={styles.button}
            onClick={clickOpenHandler}
          >
            <InfoTxt>{truncateText}</InfoTxt>
          </button>
        }
      >
        {children}
      </TextTruncate>
    </Txt>
  )
}

export default LongDescription

LongDescription.propTypes = {
  children: PropTypes.string.isRequired,
  maxChars: PropTypes.number,
  truncateText: PropTypes.string,
}

LongDescription.defaultProps = {
  maxChars: 50,
  truncateText: '続きを読む',
}
