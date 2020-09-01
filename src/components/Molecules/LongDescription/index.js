import React, {useState} from 'react'
import {LongTxt, InfoTxt} from '../../Atoms/Txt'
import PropTypes from 'prop-types'
import {useMediaQuery} from 'react-responsive'
import {MEDIA_QUERY_MD} from '../../../constants'
import styles from './styles.module.scss'

const LongDescription = ({lineClamp, truncateText, children, ...props}) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery({query: MEDIA_QUERY_MD})

  const clickOpenHandler = () => {
    setOpen(true)
  }

  const isExpanded = !isMobile || open

  // 案１：CSSで切り捨て（現在）→レイアウトが崩れる
  const style = {
    WebkitLineClamp: !isExpanded && lineClamp,
  }

  // 案2：文字列をJSXに復活させて、タグ以外の文字数をcountして切り捨て
  // const children = (
  //   <div dangerouslySetInnerHTML={{__html: children}}>
  //     aaaaa
  //     <a>aaa</a>
  //     aaaaaa
  //   </div>
  // )
  // let count = 0
  //
  // children = React.Children.map(a, child => {
  //   if (child.type.string) {
  //     count += child.length
  //   }
  //
  //   if (count >= 120) {
  //     // cut
  //   }
  //
  //   return child
  // })

  return (
    <LongTxt>
      <span>
        <span
          className={styles.textTruncate}
          style={style}
          dangerouslySetInnerHTML={{__html: children}}
        />
        {!isExpanded && (
          <span>
            <button key={'read-more'} onClick={clickOpenHandler}>
              <InfoTxt>{truncateText}</InfoTxt>
            </button>
          </span>
        )}
      </span>
    </LongTxt>
  )
}

export default LongDescription

LongDescription.propTypes = {
  children: PropTypes.string.isRequired,
  lineClamp: PropTypes.number,
  truncateText: PropTypes.string,
}

LongDescription.defaultProps = {
  lineClamp: 3,
  truncateText: '続きを読む',
}
