/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import History from '.'

describe.only('History', () => {
  describe('Integrity tests', () => {
    it('renders History correctly', () => {
      const wrapper = mount(
        <ThemeContextProvider>
          <History items={['won', 'lost', 'won', 'won', 'lost', 'won']} />
        </ThemeContextProvider>,
      )

      const HistoryContainer = wrapper.find('View').first()
      const HistoryItemContainer = wrapper.find('View').at(3)

      expect(HistoryContainer.exists()).toBe(true)
      expect(HistoryItemContainer.exists()).toBe(true)
    })
  })

  describe('Props tests', () => {
    it('renders won item History', () => {
      const wrapper = mount(
        <ThemeContextProvider>
          <History items={['won', 'lost', 'won', 'won', 'lost', 'won']} />
        </ThemeContextProvider>,
      )

      const HistoryItemContainer = wrapper.find('View').at(2)
      const HistoryItem = wrapper.find('View').at(5)

      const stylesItemContainer = StyleSheet.flatten(HistoryItemContainer.prop('style'))
      expect(stylesItemContainer.alignItems).toBe('center')
      expect(stylesItemContainer.flexDirection).toBe('row')

      const stylesItem = StyleSheet.flatten(HistoryItem.prop('style'))
      expect(stylesItem.backgroundColor).toBe('#14B916')
      expect(stylesItem.marginLeft).toBe(0)
      expect(stylesItem.height).toBe(13.82)
      expect(stylesItem.width).toBe(13.82)
      expect(stylesItem.borderRadius).toBe(13.82 / 2)
    })
    it('renders lost item History', () => {
      const wrapper = mount(
        <ThemeContextProvider>
          <History items={['lost', 'lost', 'won', 'won', 'lost', 'won']} />
        </ThemeContextProvider>,
      )

      const HistoryItemContainer = wrapper.find('View').at(2)
      const HistoryItem = wrapper.find('View').at(5)

      const stylesItemContainer = StyleSheet.flatten(HistoryItemContainer.prop('style'))
      expect(stylesItemContainer.alignItems).toBe('center')
      expect(stylesItemContainer.flexDirection).toBe('row')

      const stylesItem = StyleSheet.flatten(HistoryItem.prop('style'))
      expect(stylesItem.backgroundColor).toBe('#CA1010')
      expect(stylesItem.marginLeft).toBe(0)
      expect(stylesItem.height).toBe(13.82)
      expect(stylesItem.width).toBe(13.82)
      expect(stylesItem.borderRadius).toBe(13.82 / 2)
    })
    it('renders second won item History', () => {
      const wrapper = mount(
        <ThemeContextProvider>
          <History items={['won', 'won', 'won', 'won', 'lost', 'won']} />
        </ThemeContextProvider>,
      )

      const HistoryItemContainer = wrapper.find('View').at(2)
      const HistoryItem = wrapper.find('View').at(6)

      const stylesItemContainer = StyleSheet.flatten(HistoryItemContainer.prop('style'))
      expect(stylesItemContainer.alignItems).toBe('center')
      expect(stylesItemContainer.flexDirection).toBe('row')

      const stylesItem = StyleSheet.flatten(HistoryItem.prop('style'))
      expect(stylesItem.backgroundColor).toBe('#14B916')
      expect(stylesItem.marginLeft).toBe(4.84)
      expect(stylesItem.height).toBe(13.82)
      expect(stylesItem.width).toBe(13.82)
      expect(stylesItem.borderRadius).toBe(13.82 / 2)
    })
    it('renders second lost item History', () => {
      const wrapper = mount(
        <ThemeContextProvider>
          <History items={['won', 'lost', 'won', 'won', 'lost', 'won']} />
        </ThemeContextProvider>,
      )

      const HistoryItemContainer = wrapper.find('View').at(2)
      const HistoryItem = wrapper.find('View').at(6)

      const stylesItemContainer = StyleSheet.flatten(HistoryItemContainer.prop('style'))
      expect(stylesItemContainer.alignItems).toBe('center')
      expect(stylesItemContainer.flexDirection).toBe('row')

      const stylesItem = StyleSheet.flatten(HistoryItem.prop('style'))
      expect(stylesItem.backgroundColor).toBe('#CA1010')
      expect(stylesItem.marginLeft).toBe(4.84)
      expect(stylesItem.height).toBe(13.82)
      expect(stylesItem.width).toBe(13.82)
      expect(stylesItem.borderRadius).toBe(13.82 / 2)
    })
  })
})
