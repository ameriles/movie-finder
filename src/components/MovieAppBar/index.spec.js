import React from 'react'
import MovieAppBar from './index'
import { Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { createShallow } from '@material-ui/core/test-utils'

describe('MovieAppBar Component', () => {
  let shallow

  beforeAll(() => {
    shallow = createShallow({ dive: true })
  })

  describe('Render Component', () => {
    let component
    beforeEach(() => {
      component = shallow(<MovieAppBar isHome onMenuToggle={jest.fn()} onGoBack={jest.fn()} />)
    })

    it('Should render app title correctly', () => {
      const t = component.find(Typography)
      expect(t.children().text()).toBe('Movie Finder')
    })

    it('Should render MenuIcon when at home', () => {
      const t = component.find(MenuIcon)
      expect(t.length).toBe(1)
    })

    it('Should render ArrowBackIcon when not at home', () => {
      const component = shallow(<MovieAppBar isHome={false} onMenuToggle={jest.fn()} onGoBack={jest.fn()} />)
      const t = component.find(ArrowBackIcon)
      expect(t.length).toBe(1)
    })
  })

  describe('Events', () => {
    it('Should call toggleMenu when click at home', () => {
      const menuToggleCallback = jest.fn()
      const goBackCallback = jest.fn()
      const props = {
        isHome: true,
        onMenuToggle: menuToggleCallback,
        onGoBack: goBackCallback
      }

      const component = shallow(<MovieAppBar {...props} />)
      const b = component.find(IconButton)
      expect(menuToggleCallback.mock.calls.length).toBe(0)
      expect(goBackCallback.mock.calls.length).toBe(0)

      b.simulate('click')

      expect(menuToggleCallback.mock.calls.length).toBe(1)
      expect(goBackCallback.mock.calls.length).toBe(0)
    })

    it('Should call goBack when click not at home', () => {
      const menuToggleCallback = jest.fn()
      const goBackCallback = jest.fn()
      const props = {
        isHome: false,
        onMenuToggle: menuToggleCallback,
        onGoBack: goBackCallback
      }

      const component = shallow(<MovieAppBar {...props} />)
      const b = component.find(IconButton)
      expect(menuToggleCallback.mock.calls.length).toBe(0)
      expect(goBackCallback.mock.calls.length).toBe(0)

      b.simulate('click')

      expect(menuToggleCallback.mock.calls.length).toBe(0)
      expect(goBackCallback.mock.calls.length).toBe(1)
    })
  })
})
