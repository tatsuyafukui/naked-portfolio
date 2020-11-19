import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import {containPresenter} from '../../utils/HoC'

const TabItemPresenter = ({selected, selectedClass, className, ...props}) => {
  return (
    <button
      role='tab'
      aria-selected={selected}
      className={[styles.tab, selectedClass, className].join(' ')}
      {...props}
    />
  )
}

TabItemPresenter.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.bool,
  selectedClass: PropTypes.string,
}

export const TabItemContainer = ({
  selected,
  value,
  onClick,
  presenter,
  ...props
}) => {
  const handleClick = event => {
    if (onClick) {
      onClick(event, value)
    }
  }

  const selectedClass = selected ? styles.selected : ''
  const tabIndex = selected ? 0 : -1

  return presenter({
    tabIndex,
    onClick: handleClick,
    selected,
    selectedClass,
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
