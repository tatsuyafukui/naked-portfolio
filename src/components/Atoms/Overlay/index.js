import React from 'react'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const OverlayPresenter = ({children, className, ...props}) => (
  <div className={[styles.root, className].join(' ')} {...props}>
    {children}
  </div>
)

const OverlayContainer = ({overlayStyle, presenter, children, ...props}) => {
  children = React.Children.map(children, child => {
    if (typeof child === 'string') return null

    if (child.type === Back) {
      const grandChild = React.Children.only(child.props.children)

      return React.cloneElement(grandChild, {
        className: [styles.back].join(' '),
      })
    }

    if (child.type === Front) {
      const grandChild = child.props.children
      return (
        <div className={styles.overlay} style={{...overlayStyle}}>
          {grandChild}
        </div>
      )
    }

    return child
  })

  return presenter({children, ...props})
}

const Overlay = containPresenter(OverlayContainer, OverlayPresenter)

export default Overlay

export const Back = () => <span>これはレンダリングされないもの</span>

export const Front = () => <span>これはレンダリングされないもの</span>
