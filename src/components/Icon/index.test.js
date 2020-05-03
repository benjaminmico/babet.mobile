/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import Icon from '.'

describe.only('Icon', () => {
  describe('Integrity tests', () => {
    it('renders Icon correctly', () => {
      const label = 'bankroll'

      const wrapper = mount(
        <ThemeContextProvider>
          <Icon size={24} label={label} />
        </ThemeContextProvider>,
      )

      const IconView = wrapper.find('View').at(1)
      const IconItem = wrapper.find('SvgMock').first()

      expect(IconView.exists()).toBe(true)
      expect(IconItem.exists()).toBe(true)
    })
    it('renders Icon by missing entering label icon correctly', () => {
      const wrapper = mount(
        <ThemeContextProvider>
          <Icon size={24} />
        </ThemeContextProvider>,
      )

      const IconView = wrapper.find('View').at(1)
      const IconItem = wrapper.find('SvgMock').first()

      expect(IconView.exists()).toBe(true)
      expect(IconItem.exists()).toBe(false)
    })
  })

  describe('Props tests', () => {
    it('renders Icon', () => {
      const label = 'bankroll'

      const wrapper = mount(
        <ThemeContextProvider>
          <Icon size={24} label={label} />
        </ThemeContextProvider>,
      )

      const IconView = wrapper.find('View').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(IconView.prop('style'))
      expect(stylesContainer.width).toBe(25)
      expect(stylesContainer.height).toBe(25)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')
    })
  })
})
