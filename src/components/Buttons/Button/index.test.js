/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import Button from '.'

describe.only('Button', () => {
  describe('Integrity tests', () => {
    it('renders Button correctly', () => {
      const label = 'Supprimer'

      const wrapper = mount(
        <ThemeContextProvider>
          <Button label={label} />
        </ThemeContextProvider>,
      )

      const ButtonText = wrapper.find('Text').first()
      expect(ButtonText.exists()).toBe(true)
      expect(ButtonText.prop('children')).toBe(label)
    })
  })

  describe('Props tests', () => {
    it('renders default Button', () => {
      const label = 'Supprimer'

      const wrapper = mount(
        <ThemeContextProvider>
          <Button label={label} />
        </ThemeContextProvider>,
      )
      const ButtonContainer = wrapper.find('View').first()
      const ButtonAlertTextContainer = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(ButtonContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#F3F2F2')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.height).toBe(28)
      expect(stylesContainer.paddingTop).toBe(6)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingBottom).toBe(6)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(ButtonAlertTextContainer.prop('style'))
      expect(stylesText.color).toBe('#5100FF')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)

      expect(stylesText.letterSpacing).toBe(-0.14)
      expect(stylesText.textAlign).toBe('center')
    })
    it('renders cancellable Button', () => {
      const label = 'Supprimer'

      const wrapper = mount(
        <ThemeContextProvider>
          <Button isCancellable label={label} />
        </ThemeContextProvider>,
      )
      const ButtonContainer = wrapper.find('View').first()
      const ButtonAlertTextContainer = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(ButtonContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#F3F2F2')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.height).toBe(28)
      expect(stylesContainer.paddingTop).toBe(6)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingBottom).toBe(6)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(ButtonAlertTextContainer.prop('style'))
      expect(stylesText.color).toBe('#3E3E3E')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.letterSpacing).toBe(-0.14)
      expect(stylesText.textAlign).toBe('center')
    })
    it('renders primary Action Button', () => {
      const label = 'Supprimer'

      const wrapper = mount(
        <ThemeContextProvider>
          <Button isPrimaryAction label={label} />
        </ThemeContextProvider>,
      )
      const ButtonContainer = wrapper.find('View').first()
      const ButtonAlertTextContainer = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(ButtonContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#5100FF')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.height).toBe(28)
      expect(stylesContainer.paddingTop).toBe(6)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingBottom).toBe(6)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(ButtonAlertTextContainer.prop('style'))
      expect(stylesText.color).toBe('#FFFFFF')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.letterSpacing).toBe(-0.14)
      expect(stylesText.textAlign).toBe('center')
    })
  })
})
