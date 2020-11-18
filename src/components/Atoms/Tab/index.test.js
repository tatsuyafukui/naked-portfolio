import React from 'react'
import TabItem, {TabList, TabItemContainer} from './index'
import {mount} from 'enzyme'

describe('Tab', () => {
  const presenter = props => props

  it('slectedがtrueならstyles.selectedを付与する', () => {
    const {className} = TabItemContainer({
      presenter,
      selected: true,
    })
    expect(className).toBe('tab selected')
  })

  it('slectedがfalseならstyles.selectedを付与しない', () => {
    const {className} = TabItemContainer({
      presenter,
      selected: false,
    })
    expect(className).toBe('tab')
  })

  it('slectedがtrueならtabIndexは0', () => {
    const {tabIndex} = TabItemContainer({
      presenter,
      selected: true,
    })
    expect(tabIndex).toBe(0)
  })

  it('slectedがtrueならtabIndexは-1', () => {
    const {tabIndex} = TabItemContainer({
      presenter,
      selected: false,
    })
    expect(tabIndex).toBe(-1)
  })
})

describe('TabList', () => {
  it('childがnullの場合も受け入れる', () => {
    const wrapper = mount(
      <TabList value={0}>
        {null}
        <TabItem />
      </TabList>
    )
    expect(wrapper.find({role: 'tab'})).toHaveLength(1)
  })

  it('TabItemにvalueのpropsが無い場合はTabItemの順番で0からvalueが振られてselectedを判定する', () => {
    const wrapper = mount(
      <TabList value={1}>
        <TabItem />
        <TabItem />
      </TabList>
    )
    expect(wrapper.find({role: 'tab'}).at(0).prop('aria-selected')).toBeFalsy()
    expect(wrapper.find({role: 'tab'}).at(1).prop('aria-selected')).toBeTruthy()
  })

  it('valueが文字の場合でもselectedを判定できる', () => {
    const wrapper = mount(
      <TabList value='tab1'>
        <TabItem value='tab0' />
        <TabItem value='tab1' />
      </TabList>
    )
    expect(wrapper.find({role: 'tab'}).at(0).prop('aria-selected')).toBeFalsy()
    expect(wrapper.find({role: 'tab'}).at(1).prop('aria-selected')).toBeTruthy()
  })
})
