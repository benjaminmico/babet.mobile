/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import AlertPending from '.'

describe.only('AlertPending', () => {
  describe('Integrity tests', () => {
    it('renders AlertPending correctly', () => {
      const label = 'Traitement de la photo en cours…'

      const wrapper = mount(
        <ThemeContextProvider>
          <AlertPending label={label} />
        </ThemeContextProvider>,
      )

      const AlertPendingActivityIndicator = wrapper.find('ActivityIndicator').first()
      const AlertPendingText = wrapper.find('Text').first()
      expect(AlertPendingActivityIndicator.exists()).toBe(true)
      expect(AlertPendingText.prop('children')).toBe(label)
    })
  })

  describe('Props tests', () => {
    it('renders AlertPending', () => {
      const label = 'Traitement de la photo en cours…'

      const wrapper = mount(
        <ThemeContextProvider>
          <AlertPending label={label} />
        </ThemeContextProvider>,
      )

      const AlertPendingAlertPendingContainer = wrapper.find('View').first()
      const AlertPendingAlertPendingContentContainer = wrapper.find('View').at(2)
      const AlertPendingAlertTextContainer = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(AlertPendingAlertPendingContainer.prop('style'))
      expect(stylesContainer.position).toBe('absolute')
      expect(stylesContainer.top).toBe(0)
      expect(stylesContainer.left).toBe(0)
      expect(stylesContainer.right).toBe(0)
      expect(stylesContainer.bottom).toBe(0)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesContentContainer = StyleSheet.flatten(AlertPendingAlertPendingContentContainer.prop('style'))
      expect(stylesContentContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContentContainer.borderRadius).toBe(12.6)
      expect(stylesContentContainer.width).toBe(335)
      expect(stylesContentContainer.height).toBe(176)
      expect(stylesContentContainer.justifyContent).toBe('center')
      expect(stylesContentContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(AlertPendingAlertTextContainer.prop('style'))
      expect(stylesText.color).toBe('#000000')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(15)
      expect(stylesText.letterSpacing).toBe(-0.16)
      expect(stylesText.marginTop).toBe(20)
      expect(stylesText.paddingLeft).toBe(20)
      expect(stylesText.paddingRight).toBe(20)
      expect(stylesText.textAlign).toBe('center')
    })
  })
})
