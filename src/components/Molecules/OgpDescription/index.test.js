import React from 'react'
import OgpDescription from './index'
import {mount} from 'enzyme'

describe('OgpDescription', () => {
  it('descriptionが無いとき、InfoTxtを表示しない', () => {
    const wrapper = mount(<OgpDescription description={undefined} />)
    console.log(wrapper.debug())
    expect(wrapper.find('p.description')).toHaveLength(0)
  })

  it('descriptionがある時、InfoTxtを表示する', () => {
    const wrapper = mount(<OgpDescription description={'description'} />)
    console.log(wrapper.debug())
    expect(wrapper.find('p.description')).toHaveLength(1)
  })
})
