/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import Generic from '.'

describe.only('Generic', () => {
  describe('Integrity tests', () => {
    it('renders odd correctly', () => {
      const value = 3.0
      const label = 'Mon bilan'
      const kpiLabel = 'En augmentation'
      const description = 'T’es sur une série folle ! 7/7 ! truc de malade !'
      const wrapper = mount(
        <ThemeContextProvider>
          <Generic label={label} KPIDescription={kpiLabel} value={value} description={description} type="odd" />
        </ThemeContextProvider>,
      )

      const GenericContainer = wrapper.find('View').first()
      const GenericLabel = wrapper.find('Text').first()
      const GenericValue = wrapper.find('Text').at(2)
      const GenericKPILabel = wrapper.find('Text').at(4)
      const GenericDescription = wrapper.find('Text').at(6)

      expect(GenericContainer.exists()).toBe(true)
      expect(GenericLabel.prop('children')).toBe(label)
      expect(GenericValue.prop('children')).toBe('3.00')
      expect(GenericKPILabel.prop('children')).toBe(kpiLabel)
      expect(GenericDescription.prop('children')).toBe(description)
    })

    it('renders positive percentage correctly', () => {
      const value = 28.54
      const label = 'Mon bilan'
      const kpiLabel = 'En augmentation'
      const description = 'T’es sur une série folle ! 7/7 ! truc de malade !'
      const wrapper = mount(
        <ThemeContextProvider>
          <Generic label={label} KPIDescription={kpiLabel} value={value} description={description} type="percentage" />
        </ThemeContextProvider>,
      )

      const GenericContainer = wrapper.find('View').first()
      const GenericLabel = wrapper.find('Text').first()
      const GenericValue = wrapper.find('Text').at(2)
      const GenericKPILabel = wrapper.find('Text').at(4)
      const GenericDescription = wrapper.find('Text').at(6)

      expect(GenericContainer.exists()).toBe(true)
      expect(GenericLabel.prop('children')).toBe(label)
      expect(GenericValue.prop('children')).toBe('+28.54%')
      expect(GenericKPILabel.prop('children')).toBe(kpiLabel)
      expect(GenericDescription.prop('children')).toBe(description)
    })
    it('renders negative percentage correctly', () => {
      const value = 13.2
      const label = 'Mon bilan'
      const kpiLabel = 'En augmentation'
      const description = 'T’es sur une série folle ! 7/7 ! truc de malade !'
      const wrapper = mount(
        <ThemeContextProvider>
          <Generic label={label} KPIDescription={kpiLabel} value={value} description={description} type="currency" />
        </ThemeContextProvider>,
      )

      const GenericContainer = wrapper.find('View').first()
      const GenericLabel = wrapper.find('Text').first()
      const GenericValue = wrapper.find('Text').at(2)
      const GenericKPILabel = wrapper.find('Text').at(4)
      const GenericDescription = wrapper.find('Text').at(6)

      expect(GenericContainer.exists()).toBe(true)
      expect(GenericLabel.prop('children')).toBe(label)
      expect(GenericValue.prop('children')).toBe('€13.20')
      expect(GenericKPILabel.prop('children')).toBe(kpiLabel)
      expect(GenericDescription.prop('children')).toBe(description)
    })
    it('renders currency correctly', () => {
      const value = -28.54
      const label = 'Mon bilan'
      const kpiLabel = 'En augmentation'
      const description = 'T’es sur une série folle ! 7/7 ! truc de malade !'
      const wrapper = mount(
        <ThemeContextProvider>
          <Generic label={label} KPIDescription={kpiLabel} value={value} description={description} type="percentage" />
        </ThemeContextProvider>,
      )

      const GenericContainer = wrapper.find('View').first()
      const GenericLabel = wrapper.find('Text').first()
      const GenericValue = wrapper.find('Text').at(2)
      const GenericKPILabel = wrapper.find('Text').at(4)
      const GenericDescription = wrapper.find('Text').at(6)

      expect(GenericContainer.exists()).toBe(true)
      expect(GenericLabel.prop('children')).toBe(label)
      expect(GenericValue.prop('children')).toBe('-28.54%')
      expect(GenericKPILabel.prop('children')).toBe(kpiLabel)
      expect(GenericDescription.prop('children')).toBe(description)
    })
  })

  describe('Props tests', () => {
    it('renders default Generic correctly', () => {
      const label = 'Mon bilan'
      const value = 403.02
      const description = 'Depuis une semaine, tu as gagné 405,93€ grâce aux paris sportifs 😊.'
      const kpiLabel = 'En augmentation'

      const windowWidth = 375

      const wrapper = mount(
        <ThemeContextProvider>
          <Generic label={label} KPIDescription={kpiLabel} value={value} description={description} />
        </ThemeContextProvider>,
      )

      const GenericContainer = wrapper.find('View').first()
      const GenericLabel = wrapper.find('Text').first()
      const GenericValue = wrapper.find('Text').at(2)
      const GenericKPILabel = wrapper.find('Text').at(4)
      const GenericDescription = wrapper.find('Text').at(6)

      const stylesContainer = StyleSheet.flatten(GenericContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#FFFFFF')
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.width).toBe(windowWidth * 0.42 * 2)
      expect(stylesContainer.height).toBe(143)
      expect(stylesContainer.borderRadius).toBe(12.6)
      expect(stylesContainer.shadowRadius).toBe(18)
      expect(stylesContainer.shadowColor).toBe('#c8c9ca')
      expect(stylesContainer.shadowOpacity).toBe(0.5)

      const stylesLabel = StyleSheet.flatten(GenericLabel.prop('style'))
      expect(stylesLabel.position).toBe('absolute')
      expect(stylesLabel.top).toBe(10)
      expect(stylesLabel.color).toBe('#000000')
      expect(stylesLabel.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesLabel.fontSize).toBe(13)
      expect(stylesLabel.letterSpacing).toBe(-0.14)
      expect(stylesLabel.lineHeight).toBe(18)

      const stylesValue = StyleSheet.flatten(GenericValue.prop('style'))
      expect(stylesValue.position).toBe('absolute')
      expect(stylesValue.top).toBe(30)
      expect(stylesValue.color).toBe('#3E3E3E')
      expect(stylesValue.fontFamily).toBe('AvenirNext-Bold')
      expect(stylesValue.fontSize).toBe(35)
      expect(stylesValue.letterSpacing).toBe(-1.27)
      expect(stylesValue.lineHeight).toBe(48)

      const stylesKPILabel = StyleSheet.flatten(GenericKPILabel.prop('style'))
      expect(stylesKPILabel.position).toBe('absolute')
      expect(stylesKPILabel.top).toBe(73)
      expect(stylesKPILabel.color).toBe('#3E3E3E')
      expect(stylesKPILabel.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesKPILabel.fontSize).toBe(13)
      expect(stylesKPILabel.letterSpacing).toBe(-0.14)
      expect(stylesKPILabel.lineHeight).toBe(18)

      const stylesDescription = StyleSheet.flatten(GenericDescription.prop('style'))
      expect(stylesDescription.position).toBe('absolute')
      expect(stylesDescription.top).toBe(97)
      expect(stylesDescription.width).toBe(142.94)
      expect(stylesDescription.color).toBe('#ADADAD')
      expect(stylesDescription.fontFamily).toBe('AvenirNext-Medium')
      expect(stylesDescription.fontSize).toBe(13)
      expect(stylesDescription.letterSpacing).toBe(-0.14)
      expect(stylesDescription.lineHeight).toBe(18)
    })
  })
})
