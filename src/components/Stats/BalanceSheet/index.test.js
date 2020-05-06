/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import BalanceSheet from '.'

describe.only('BalanceSheet', () => {
  describe('Integrity tests', () => {
    it('renders pending BalanceSheet correctly', () => {
      const value = 403.02
      const description = 'Depuis une semaine, tu as gagné 405,93€ grâce aux paris sportifs 😊.'
      const wrapper = mount(
        <ThemeContextProvider>
          <BalanceSheet value={value} description={description} />
        </ThemeContextProvider>,
      )

      const BalanceSheetContainer = wrapper.find('View').first()
      const BalanceSheetLabel = wrapper.find('Text').first()
      const BalanceSheetValue = wrapper.find('Text').at(2)
      const BalanceSheetDescription = wrapper.find('Text').at(4)

      expect(BalanceSheetContainer.exists()).toBe(true)
      expect(BalanceSheetLabel.prop('children')).toBe('Mon bilan')
      expect(BalanceSheetValue.prop('children')).toBe('€403.02')
      expect(BalanceSheetDescription.prop('children')).toBe(description)
    })
  })

  describe('Props tests', () => {
    it('renders positive BalanceSheet correctly', () => {
      const value = 403.02
      const description = 'Depuis une semaine, tu as gagné 405,93€ grâce aux paris sportifs 😊.'
      const wrapper = mount(
        <ThemeContextProvider>
          <BalanceSheet value={value} description={description} />
        </ThemeContextProvider>,
      )

      const BalanceSheetContainer = wrapper.find('View').first()
      const BalanceSheetContentContainer = wrapper.find('View').at(2)
      const BalanceSheetLabel = wrapper.find('Text').first()
      const BalanceSheetValue = wrapper.find('Text').at(2)
      const BalanceSheetDescription = wrapper.find('Text').at(4)
      const BalanceSheetFilters = wrapper.find('View').at(4)

      const stylesContainer = StyleSheet.flatten(BalanceSheetContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.alignItems).toBe('center')
      expect(stylesContainer.width).toBe(339)
      expect(stylesContainer.height).toBe(127)
      expect(stylesContainer.borderRadius).toBe(12.6)
      expect(stylesContainer.shadowRadius).toBe(18)
      expect(stylesContainer.shadowColor).toBe('#c8c9ca')
      expect(stylesContainer.shadowOpacity).toBe(0.5)

      const stylesContentContainer = StyleSheet.flatten(BalanceSheetContentContainer.prop('style'))
      expect(stylesContentContainer.height).toBe(100)
      expect(stylesContentContainer.width).toBe(223.64)
      expect(stylesContentContainer.justifyContent).toBe('space-between')
      expect(stylesContentContainer.marginLeft).toBe(12.14)

      const stylesLabel = StyleSheet.flatten(BalanceSheetLabel.prop('style'))
      expect(stylesLabel.color).toBe('#000000')
      expect(stylesLabel.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesLabel.fontSize).toBe(13)
      expect(stylesLabel.letterSpacing).toBe(-0.14)
      expect(stylesLabel.lineHeight).toBe(18)

      const stylesValue = StyleSheet.flatten(BalanceSheetValue.prop('style'))
      expect(stylesValue.color).toBe('#14B916')
      expect(stylesValue.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesValue.fontSize).toBe(35)
      expect(stylesValue.letterSpacing).toBe(-1.27)
      expect(stylesValue.lineHeight).toBe(48)

      const stylesDescription = StyleSheet.flatten(BalanceSheetDescription.prop('style'))
      expect(stylesDescription.color).toBe('#ADADAD')
      expect(stylesDescription.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesDescription.fontSize).toBe(13)
      expect(stylesDescription.letterSpacing).toBe(-0.14)
      expect(stylesDescription.lineHeight).toBe(18)

      const stylesFilters = StyleSheet.flatten(BalanceSheetFilters.prop('style'))
      expect(stylesFilters.position).toBe('absolute')
      expect(stylesFilters.right).toBe(20)
    })
    it('renders negative BalanceSheet correctly', () => {
      const value = -403.02
      const description = 'Depuis une semaine, tu as gagné 405,93€ grâce aux paris sportifs 😊.'
      const wrapper = mount(
        <ThemeContextProvider>
          <BalanceSheet value={value} description={description} />
        </ThemeContextProvider>,
      )

      const BalanceSheetContainer = wrapper.find('View').first()
      const BalanceSheetContentContainer = wrapper.find('View').at(2)
      const BalanceSheetLabel = wrapper.find('Text').first()
      const BalanceSheetValue = wrapper.find('Text').at(2)
      const BalanceSheetDescription = wrapper.find('Text').at(4)
      const BalanceSheetFilters = wrapper.find('View').at(4)

      const stylesContainer = StyleSheet.flatten(BalanceSheetContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.alignItems).toBe('center')
      expect(stylesContainer.width).toBe(339)
      expect(stylesContainer.height).toBe(127)
      expect(stylesContainer.borderRadius).toBe(12.6)
      expect(stylesContainer.shadowRadius).toBe(18)
      expect(stylesContainer.shadowColor).toBe('#c8c9ca')
      expect(stylesContainer.shadowOpacity).toBe(0.5)

      const stylesContentContainer = StyleSheet.flatten(BalanceSheetContentContainer.prop('style'))
      expect(stylesContentContainer.height).toBe(100)
      expect(stylesContentContainer.width).toBe(223.64)
      expect(stylesContentContainer.justifyContent).toBe('space-between')
      expect(stylesContentContainer.marginLeft).toBe(12.14)

      const stylesLabel = StyleSheet.flatten(BalanceSheetLabel.prop('style'))
      expect(stylesLabel.color).toBe('#000000')
      expect(stylesLabel.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesLabel.fontSize).toBe(13)
      expect(stylesLabel.letterSpacing).toBe(-0.14)
      expect(stylesLabel.lineHeight).toBe(18)

      const stylesValue = StyleSheet.flatten(BalanceSheetValue.prop('style'))
      expect(stylesValue.color).toBe('#CA1010')
      expect(stylesValue.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesValue.fontSize).toBe(35)
      expect(stylesValue.letterSpacing).toBe(-1.27)
      expect(stylesValue.lineHeight).toBe(48)

      const stylesDescription = StyleSheet.flatten(BalanceSheetDescription.prop('style'))
      expect(stylesDescription.color).toBe('#ADADAD')
      expect(stylesDescription.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesDescription.fontSize).toBe(13)
      expect(stylesDescription.letterSpacing).toBe(-0.14)
      expect(stylesDescription.lineHeight).toBe(18)

      const stylesFilters = StyleSheet.flatten(BalanceSheetFilters.prop('style'))
      expect(stylesFilters.position).toBe('absolute')
      expect(stylesFilters.right).toBe(20)
    })
  })
})
