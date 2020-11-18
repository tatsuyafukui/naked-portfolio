import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const TabItemPresenter = ({selected, ...props}) => {
  return <button role='tab' aria-selected={selected} {...props} />
}

TabItemPresenter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.any,
  tabIndex: PropTypes.number,
}

export const TabItemContainer = ({
  selected,
  value,
  onClick,
  className,
  presenter,
  ...props
}) => {
  const handleClick = event => {
    if (onClick) {
      onClick(event, value)
    }
  }

  const selectedClass = selected ? styles.selected : ''
  const classes = [styles.tab, selectedClass, className].join(' ').trim()
  const tabIndex = selected ? 0 : -1

  return presenter({
    className: classes,
    tabIndex,
    onClick: handleClick,
    selected,
    ...props,
  })
}

const TabItem = containPresenter(TabItemContainer, TabItemPresenter)
export default TabItem

TabItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  value: PropTypes.any,
}

export const TabList = ({
  children,
  tag: Tag = 'div',
  onClick,
  value,
  ...props
}) => {
  const tabsChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) {
      return null
    }

    const childValue =
      child.props.value === undefined ? index : child.props.value

    return React.cloneElement(child, {
      selected: childValue === value,
      onClick,
      value: childValue,
    })
  })

  return (
    <Tag role='tablist' {...props}>
      {tabsChildren}
    </Tag>
  )
}

TabList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType,
  onClick: PropTypes.func,
  value: PropTypes.any,
}
