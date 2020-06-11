import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const OverlayPresenter = ({children, className, ...props}) => (
  <div className={[styles.root, className].join(' ')} {...props}>
    {children}
  </div>
)

const OverlayContainer = ({presenter, children, ...props}) => {
  children = React.Children.map(children, child => {
    if (typeof child === 'string') return null

    if (child.type.name === 'Back') {
      const grandChild = React.Children.only(child.props.children)

      return React.cloneElement(grandChild, {
        className: [styles.back].join(' '),
      })
    }

    if (child.type.name === 'Front') {
      const grandChild = child.props.children
      return <div className={styles.overlay}>{grandChild}</div>
    }

    return child
  })

  return presenter({children, ...props})
}

const Overlay = containPresenter(OverlayContainer, OverlayPresenter)

export default Overlay

const Back = () => <span>これはレンダリングされないもの</span>

Back.propTypes = {
  children: PropTypes.element.isRequired,
}

export {Back}

export const Front = () => <span>これはレンダリングされないもの</span>
