/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import HeaderTitle from '.'

describe.only('HeaderTitle', () => {
  describe('Integrity tests', () => {
    it('renders HeaderTitle correctly', () => {
      const label = "s'inscrire"

      const wrapper = mount(
        <ThemeContextProvider>
          <HeaderTitle goBack title={label} />
        </ThemeContextProvider>,
      )

      const HeaderTitleText = wrapper.find('Text').first()
      expect(HeaderTitleText.exists()).toBe(true)
      expect(HeaderTitleText.prop('children')).toBe(label.charAt(0).toUpperCase() + label.slice(1))
    })
  })

  describe('Props tests', () => {
    it('renders default HeaderTitle', () => {
      const label = "s'inscrire"

      const wrapper = mount(
        <ThemeContextProvider>
          <HeaderTitle goBack title={label} />
        </ThemeContextProvider>,
      )

      const HeaderTitleContainer = wrapper.find('View').first()
      const HeaderTitleTextContainer = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(HeaderTitleContainer.prop('style'))
      expect(stylesContainer.position).toBe('absolute')
      expect(stylesContainer.bottom).toBe(0)
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.alignItems).toBe('center')
      expect(stylesContainer.paddingLeft).toBe(14)

      const stylesText = StyleSheet.flatten(HeaderTitleTextContainer.prop('style'))
      expect(stylesText.color).toBe('#000000')
      expect(stylesText.maxWidth).toBe(349)
      expect(stylesText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesText.fontSize).toBe(24)
      expect(stylesText.letterSpacing).toBe(0)
      expect(stylesText.lineHeight).toBe(33)
      expect(stylesText.paddingLeft).toBe(10)
    })
  })
})
