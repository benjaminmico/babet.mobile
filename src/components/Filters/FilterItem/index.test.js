/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import FilterItem from '.'

describe.only('FilterItem', () => {
  describe('Integrity tests', () => {
    it('renders FilterItem correctly', () => {
      const item = {label: '1 sem.', selected: true}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label={item.label} selected={item.selected} />
        </ThemeContextProvider>,
      )

      const FilterItemText = wrapper.find('Text').first()
      const FilterItemTick = wrapper.find('SvgMock').first()
      expect(FilterItemText.prop('children')).toBe('1 sem.')
      expect(FilterItemTick.exists()).toBe(false)
    })
    it('renders FilterItem correctly with multifilters', () => {
      const item = {label: '1 sem.', selected: true}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label={item.label} selected={item.selected} multiFilter />
        </ThemeContextProvider>,
      )

      const FilterItemText = wrapper.find('Text').first()
      const FilterItemTick = wrapper.find('SvgMock').first()
      expect(FilterItemText.prop('children')).toBe('1 sem.')
      expect(FilterItemTick.exists()).toBe(true)
    })
  })

  describe('Props tests', () => {
    it('renders selected FilterItem', () => {
      const item = {label: '1 sem.', selected: true}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label={item.label} selected={item.selected} horizontal={false} />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()
      const FilterItemText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#F3F2F2')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.marginLeft).toBe(0)
      expect(stylesContainer.marginTop).toBe(0)
      expect(stylesContainer.height).toBe(24)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(FilterItemText.prop('style'))
      expect(stylesText.color).toBe('#000000')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.lineHeight).toBe(18)
      expect(stylesText.letterSpacing).toBe(-0.14)
    })
    it('renders unselected FilterItem', () => {
      const item = {label: '1 sem.', selected: false}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label={item.label} selected={item.selected} horizontal={false} />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()
      const FilterItemText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('transparent')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.marginLeft).toBe(0)
      expect(stylesContainer.marginTop).toBe(0)
      expect(stylesContainer.height).toBe(24)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(FilterItemText.prop('style'))
      expect(stylesText.color).toBe('#A3A2A2')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.lineHeight).toBe(18)
      expect(stylesText.letterSpacing).toBe(-0.14)
    })
    it('renders selected multi filter FilterItem', () => {
      const item = {label: '1 sem.', selected: true}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label={item.label} selected={item.selected} multiFilter horizontal={false} />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()
      const FilterItemText = wrapper.find('Text').first()
      const FilterItemTick = wrapper.find('SvgMock').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('#F3F2F2')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.marginLeft).toBe(0)
      expect(stylesContainer.marginTop).toBe(0)
      expect(stylesContainer.height).toBe(24)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(FilterItemText.prop('style'))
      expect(stylesText.color).toBe('#5100FF')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.lineHeight).toBe(18)
      expect(stylesText.letterSpacing).toBe(-0.14)

      const stylesTick = StyleSheet.flatten(FilterItemTick.prop('style'))
      expect(stylesTick.marginLeft).toBe(5.65)
      expect(FilterItemTick.prop('width')).toBe(12)
      expect(FilterItemTick.prop('height')).toBe(12)
    })
    it('renders unselected multi filterFilterItem', () => {
      const item = {label: '1 sem.', selected: false}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label={item.label} selected={item.selected} multiFilter horizontal={false} />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()
      const FilterItemText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('transparent')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.marginLeft).toBe(0)
      expect(stylesContainer.marginTop).toBe(0)
      expect(stylesContainer.height).toBe(24)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(FilterItemText.prop('style'))
      expect(stylesText.color).toBe('#A3A2A2')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.lineHeight).toBe(18)
      expect(stylesText.letterSpacing).toBe(-0.14)
    })
    it('renders horizontal FilterItem with index 0 ', () => {
      const item = {label: '1 sem.', selected: false}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label={item.label} selected={item.selected} multiFilter horizontal />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()
      const FilterItemText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('transparent')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.marginLeft).toBe(0)
      expect(stylesContainer.marginTop).toBe(0)
      expect(stylesContainer.height).toBe(24)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(FilterItemText.prop('style'))
      expect(stylesText.color).toBe('#A3A2A2')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.lineHeight).toBe(18)
      expect(stylesText.letterSpacing).toBe(-0.14)
    })
    it('renders horizontal FilterItem with index greater than 0', () => {
      const item = {label: '1 sem.', selected: false}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={1} label={item.label} selected={item.selected} multiFilter horizontal />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()
      const FilterItemText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('transparent')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.marginLeft).toBe(19)
      expect(stylesContainer.marginTop).toBe(0)
      expect(stylesContainer.height).toBe(24)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(FilterItemText.prop('style'))
      expect(stylesText.color).toBe('#A3A2A2')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.lineHeight).toBe(18)
      expect(stylesText.letterSpacing).toBe(-0.14)
    })
    it('renders FilterItem with index 0 ', () => {
      const item = {label: '1 sem.', selected: false}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label={item.label} selected={item.selected} multiFilter horizontal />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()
      const FilterItemText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('transparent')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.marginLeft).toBe(0)
      expect(stylesContainer.marginTop).toBe(0)
      expect(stylesContainer.height).toBe(24)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(FilterItemText.prop('style'))
      expect(stylesText.color).toBe('#A3A2A2')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.lineHeight).toBe(18)
      expect(stylesText.letterSpacing).toBe(-0.14)
    })
    it('renders FilterItem with index greater than 0', () => {
      const item = {label: '1 sem.', selected: false}

      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={1} label={item.label} selected={item.selected} multiFilter />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()
      const FilterItemText = wrapper.find('Text').first()

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(stylesContainer.backgroundColor).toBe('transparent')
      expect(stylesContainer.borderRadius).toBe(8)
      expect(stylesContainer.marginLeft).toBe(0)
      expect(stylesContainer.marginTop).toBe(11)
      expect(stylesContainer.height).toBe(24)
      expect(stylesContainer.paddingRight).toBe(9)
      expect(stylesContainer.paddingLeft).toBe(9)
      expect(stylesContainer.justifyContent).toBe('center')
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(FilterItemText.prop('style'))
      expect(stylesText.color).toBe('#A3A2A2')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(13)
      expect(stylesText.lineHeight).toBe(18)
      expect(stylesText.letterSpacing).toBe(-0.14)
    })
  })
})
