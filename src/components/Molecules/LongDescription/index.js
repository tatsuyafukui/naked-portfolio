import React, {useState} from 'react'
import {LongTxt, InfoTxt} from '../../Atoms/Txt'
import PropTypes from 'prop-types'
import {useMediaQuery} from 'react-responsive'
import {MEDIA_QUERY_MD} from '../../../constants'
import TextTruncate from '../../Atoms/TextTruncate'

const LongDescription = ({
  // lineClamp,
  maxChars,
  truncateText,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery({query: MEDIA_QUERY_MD})

  const clickOpenHandler = () => {
    setOpen(true)
  }

  // 案１
  // const a = (
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

  // 案２→CSSで調整→レイアウトが崩れる
  // コメントアウト外せば使えます
  // =====================ここから=========================
  // const isExpanded = !isMobile || open
  //
  // const style = {
  //   WebkitLineClamp: !isExpanded && lineClamp,
  //   WebkitBoxOrient: 'vertical',
  //   display: '-webkit-box',
  //   overflow: 'hidden',
  // }
  //
  // return (
  //   <LongTxt>
  //     <span>
  //       <span
  //         className={styles.textTruncate}
  //         style={style}
  //         dangerouslySetInnerHTML={{__html: children}}
  //       />
  //       {!isExpanded && (
  //         <span>
  //           <button key={'read-more'} onClick={clickOpenHandler}>
  //             <InfoTxt>{truncateText}</InfoTxt>
  //           </button>
  //         </span>
  //       )}
  //     </span>
  //   </LongTxt>
  // )
  // =====================ここまで=========================

  return (
    <LongTxt>
      <TextTruncate
        open={!isMobile || open}
        maxChars={maxChars}
        truncateText={
          <button key={'read-more'} onClick={clickOpenHandler}>
            <InfoTxt>{truncateText}</InfoTxt>
          </button>
        }
      >
        {children}
      </TextTruncate>
    </LongTxt>
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
