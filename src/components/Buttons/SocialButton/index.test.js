/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import SocialButton from '.'

describe.only('SocialButton', () => {
  describe('Integrity tests', () => {
    it('renders facebook SocialButton correctly', () => {
      const type = 'facebook'

      const wrapper = mount(
        <ThemeContextProvider>
          <SocialButton type={type} />
        </ThemeContextProvider>,
      )

      const SocialButtonText = wrapper.find('Text').first()
      expect(SocialButtonText.exists()).toBe(true)
      expect(SocialButtonText.prop('children')).toBe('SIGN IN WITH FACEBOOK')
    })
    it('renders apple SocialButton correctly', () => {
      const type = 'apple'

      const wrapper = mount(
        <ThemeContextProvider>
          <SocialButton type={type} />
        </ThemeContextProvider>,
      )

      const SocialButtonText = wrapper.find('Text').first()
      expect(SocialButtonText.exists()).toBe(true)
      expect(SocialButtonText.prop('children')).toBe('SIGN IN WITH APPLE')
    })
    it('renders gmail SocialButton correctly', () => {
      const type = 'gmail'

      const wrapper = mount(
        <ThemeContextProvider>
          <SocialButton type={type} />
        </ThemeContextProvider>,
      )

      const SocialButtonText = wrapper.find('Text').first()
      expect(SocialButtonText.exists()).toBe(true)
      expect(SocialButtonText.prop('children')).toBe('SIGN IN WITH GMAIL')
    })
  })

  describe('Props tests', () => {
    it('renders facebook SocialButton', () => {
      const type = 'facebook'

      const wrapper = mount(
        <ThemeContextProvider>
          <SocialButton type={type} />
        </ThemeContextProvider>,
      )

      const SocialButtonContainer = wrapper.find('TouchableOpacity').first()
      const SocialButtonTextContainer = wrapper.find('Text').first()

      const stylesContainer = StyleSheet.flatten(SocialButtonContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#1976D2')
      expect(stylesContainer.width).toBe(339)
      expect(stylesContainer.height).toBe(53)
      expect(stylesContainer.paddingTop).toBe(6)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingBottom).toBe(6)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(SocialButtonTextContainer.prop('style'))
      expect(stylesText.color).toBe('#FFFFFF')
      expect(stylesText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesText.fontSize).toBe(14)
      expect(stylesText.lineHeight).toBe(19)
      expect(stylesText.letterSpacing).toBe(1)
      expect(stylesText.textAlign).toBe('center')
    })
    it('renders apple SocialButton', () => {
      const type = 'apple'

      const wrapper = mount(
        <ThemeContextProvider>
          <SocialButton type={type} />
        </ThemeContextProvider>,
      )

      const SocialButtonContainer = wrapper.find('TouchableOpacity').first()
      const SocialButtonTextContainer = wrapper.find('Text').first()

      const stylesContainer = StyleSheet.flatten(SocialButtonContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#000000')
      expect(stylesContainer.width).toBe(339)
      expect(stylesContainer.height).toBe(53)
      expect(stylesContainer.paddingTop).toBe(6)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingBottom).toBe(6)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(SocialButtonTextContainer.prop('style'))
      expect(stylesText.color).toBe('#FFFFFF')
      expect(stylesText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesText.fontSize).toBe(14)
      expect(stylesText.lineHeight).toBe(19)
      expect(stylesText.letterSpacing).toBe(1)
      expect(stylesText.textAlign).toBe('center')
    })
    it('renders gmail SocialButton', () => {
      const type = 'gmail'

      const wrapper = mount(
        <ThemeContextProvider>
          <SocialButton type={type} />
        </ThemeContextProvider>,
      )

      const SocialButtonContainer = wrapper.find('TouchableOpacity').first()
      const SocialButtonTextContainer = wrapper.find('Text').first()

      const stylesContainer = StyleSheet.flatten(SocialButtonContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#F44336')
      expect(stylesContainer.width).toBe(339)
      expect(stylesContainer.height).toBe(53)
      expect(stylesContainer.paddingTop).toBe(6)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingBottom).toBe(6)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(SocialButtonTextContainer.prop('style'))
      expect(stylesText.color).toBe('#FFFFFF')
      expect(stylesText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesText.fontSize).toBe(14)
      expect(stylesText.lineHeight).toBe(19)
      expect(stylesText.letterSpacing).toBe(1)
      expect(stylesText.textAlign).toBe('center')
    })
  })
})
