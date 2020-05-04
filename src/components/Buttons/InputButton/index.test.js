/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import InputButton from '.'

describe.only('InputButton', () => {
  describe('Integrity tests', () => {
    it('renders InputButton correctly', () => {
      const label = 'Supprimer'

      const wrapper = mount(
        <ThemeContextProvider>
          <InputButton label={label} />
        </ThemeContextProvider>,
      )

      const InputButtonText = wrapper.find('Text').first()
      expect(InputButtonText.exists()).toBe(true)
      expect(InputButtonText.prop('children')).toBe(label.toUpperCase())
    })
  })

  describe('Props tests', () => {
    it('renders default InputButton', () => {
      const label = 'Supprimer'

      const wrapper = mount(
        <ThemeContextProvider>
          <InputButton label={label} />
        </ThemeContextProvider>,
      )
      const InputButtonContainer = wrapper.find('TouchableOpacity').first()
      const InputButtonTextContainer = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(InputButtonContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#5100FF')
      expect(stylesContainer.width).toBe(339)
      expect(stylesContainer.height).toBe(53)
      expect(stylesContainer.paddingTop).toBe(6)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingBottom).toBe(6)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(InputButtonTextContainer.prop('style'))
      expect(stylesText.color).toBe('#FFFFFF')
      expect(stylesText.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesText.fontSize).toBe(14)
      expect(stylesText.lineHeight).toBe(19)
      expect(stylesText.letterSpacing).toBe(1)
      expect(stylesText.textAlign).toBe('center')
    })
  })
})
