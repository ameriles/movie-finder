import React from 'react'
import { Typography } from '@material-ui/core'
import AboutUs from './index'
import { createShallow } from '@material-ui/core/test-utils'

describe('AboutUs Component', () => {
  it('Should render two typographies', () => {
    const shallow = createShallow({ dive: true })
    const component = shallow(<AboutUs />)

    const elements = component.find(Typography)
    expect(elements.length).toBe(2)
  })

  it('Should render two typographies with the correct text', () => {
    const shallow = createShallow({ dive: true })
    const component = shallow(<AboutUs />)

    const elements = component.find(Typography)
    const first = elements.at(0)
    const second = elements.at(1)

    expect(first.prop('variant')).toBe('h5')
    expect(first.children().text()).toBe('Movie Finder 2019')
    expect(second.children().text()).toBe('Powered by The OMDB Api')
  })
})
