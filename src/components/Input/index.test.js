/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import Input from '.'

describe.only('Input', () => {
  describe('Integrity tests', () => {
    it('renders Input correctly', () => {
      const inputLabel = 'Pseudo'
      const placeholder = 'Entrez votre pseudo'

      const wrapper = mount(
        <ThemeContextProvider>
          <Input inputLabel={inputLabel} placeholder={placeholder} />
        </ThemeContextProvider>,
      )

      const InputLabel = wrapper.find('Text').first()
      const InputItem = wrapper.find('TextInput').first()

      expect(InputLabel.exists()).toBe(true)
      expect(InputLabel.prop('children')).toBe(inputLabel)
      expect(InputItem.exists()).toBe(true)
      expect(InputItem.prop('placeholder')).toBe(placeholder)
    })
  })

  describe('Props tests', () => {
    it('renders  Input', () => {
      const inputLabel = 'Pseudo'

      const wrapper = mount(
        <ThemeContextProvider>
          <Input inputLabel={inputLabel} />
        </ThemeContextProvider>,
      )
      const InputContainer = wrapper.find('View').first()
      const InputLabel = wrapper.find('Text').first()
      const InputValue = wrapper.find('TextInput').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(InputContainer.prop('style'))
      expect(stylesContainer.borderBottomWidth).toBe(1)
      expect(stylesContainer.borderColor).toBe('rgba(220, 218, 218, 0.5)')
      expect(stylesContainer.width).toBe('100%')
      expect(stylesContainer.height).toBe(72)
      expect(stylesContainer.paddingTop).toBe(14)
      expect(stylesContainer.paddingLeft).toBe(21.5)

      const stylesLabel = StyleSheet.flatten(InputLabel.prop('style'))
      expect(stylesLabel.color).toBe('#7C7C7C')
      expect(stylesLabel.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesLabel.fontSize).toBe(13)
      expect(stylesLabel.letterSpacing).toBe(-0.14)
      expect(stylesLabel.lineHeight).toBe(18)
      expect(stylesLabel.textAlign).toBe('left')

      const stylesInputValue = StyleSheet.flatten(InputValue.prop('style'))
      expect(stylesInputValue.color).toBe('#000000')
      expect(stylesInputValue.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesInputValue.fontSize).toBe(15)
      expect(stylesInputValue.letterSpacing).toBe(-0.16)
      expect(stylesInputValue.lineHeight).toBe(20)
      expect(stylesInputValue.marginTop).toBe(8)
      expect(stylesInputValue.textAlign).toBe('left')
    })
  })
})
