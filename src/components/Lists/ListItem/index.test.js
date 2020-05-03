/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {mount} from 'enzyme'
import ListItem from '.'

describe.only('ListItem', () => {
  describe('Integrity tests', () => {
    it('renders ListItem correctly', () => {
      const label = 'Mes bankrolls'
      const icon = 'bankroll'
      const leftActionIcon = 'informations'
      const rightActionIcon = 'bankroll'

      const wrapper = mount(
        <ThemeContextProvider>
          <ListItem
            label={label}
            icon={icon}
            leftActionIcon={leftActionIcon}
            rightActionIcon={rightActionIcon}
            onLeftAction={() => console.log('onLeft')}
            onRightAction={() => console.log('onRight')}
          />
        </ThemeContextProvider>,
      )

      const ListItemLeftIcon = wrapper.find('View').at(1)
      expect(ListItemLeftIcon.exists()).toBe(true)
    })
    it('renders ListItem without Actions Icons', () => {
      const label = 'Mes bankrolls'

      const wrapper = mount(
        <ThemeContextProvider>
          <ListItem label={label} />
        </ThemeContextProvider>,
      )

      const ListItemLeftIcon = wrapper.find('View').at(1)
      const ListItemIconsContainer = wrapper.find('View').at(4)
      expect(ListItemLeftIcon.exists()).toBe(true)
      expect(ListItemIconsContainer.exists()).toBe(false)
    })
  })

  describe('Props tests', () => {
    it('renders default ListItem', () => {
      const label = 'Mes bankrolls'
      const icon = 'informations'
      const leftActionIcon = 'informations'
      const rightActionIcon = 'bankroll'

      const wrapper = mount(
        <ThemeContextProvider>
          <ListItem
            label={label}
            icon={icon}
            leftActionIcon={leftActionIcon}
            rightActionIcon={rightActionIcon}
            onLeftAction={() => console.log('onLeft')}
            onRightAction={() => console.log('onRight')}
          />
        </ThemeContextProvider>,
      )

      const ListItemContainer = wrapper.find('TouchableOpacity').first()
      const ListItemText = wrapper.find('Text').first()
      const ListItemIconsContainer = wrapper.find('View').at(4)

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(ListItemContainer.prop('style'))
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.width).toBe('100%')
      expect(stylesContainer.height).toBe(62)
      expect(stylesContainer.paddingTop).toBe(19)
      expect(stylesContainer.paddingLeft).toBe(10)
      expect(stylesContainer.paddingBottom).toBe(19)
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(ListItemText.prop('style'))
      expect(stylesText.color).toBe('#000000')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(15)
      expect(stylesText.letterSpacing).toBe(-0.16)
      expect(stylesText.marginLeft).toBe(33)
      expect(stylesText.marginTop).toBe(2)
      expect(stylesText.textAlign).toBe('left')

      const stylesIcons = StyleSheet.flatten(ListItemIconsContainer.prop('style'))
      expect(stylesIcons.position).toBe('absolute')
      expect(stylesIcons.right).toBe(26)
      expect(stylesIcons.width).toBe(65)
      expect(stylesIcons.height).toBe(25)
      expect(stylesIcons.flexDirection).toBe('row')
      expect(stylesIcons.justifyContent).toBe('space-between')
      expect(stylesIcons.alignItems).toBe('center')
    })
    it('renders default ListItem without left Icon', () => {
      const label = 'Mes bankrolls'
      const leftActionIcon = 'informations'
      const rightActionIcon = 'bankroll'

      const wrapper = mount(
        <ThemeContextProvider>
          <ListItem
            label={label}
            leftActionIcon={leftActionIcon}
            rightActionIcon={rightActionIcon}
            onLeftAction={() => console.log('onLeft')}
            onRightAction={() => console.log('onRight')}
          />
        </ThemeContextProvider>,
      )

      const ListItemContainer = wrapper.find('TouchableOpacity').first()
      const ListItemText = wrapper.find('Text').first()
      const ListItemIconsContainer = wrapper.find('View').at(3)

      expect(wrapper).toMatchSnapshot()

      const stylesContainer = StyleSheet.flatten(ListItemContainer.prop('style'))
      expect(stylesContainer.flexDirection).toBe('row')
      expect(stylesContainer.width).toBe('100%')
      expect(stylesContainer.height).toBe(62)
      expect(stylesContainer.paddingTop).toBe(19)
      expect(stylesContainer.paddingLeft).toBe(10)
      expect(stylesContainer.paddingBottom).toBe(19)
      expect(stylesContainer.alignItems).toBe('center')

      const stylesText = StyleSheet.flatten(ListItemText.prop('style'))
      expect(stylesText.color).toBe('#000000')
      expect(stylesText.fontFamily).toBe('AvenirNext-DemiBold')
      expect(stylesText.fontSize).toBe(15)
      expect(stylesText.letterSpacing).toBe(-0.16)
      expect(stylesText.marginLeft).toBe(10)
      expect(stylesText.marginTop).toBe(2)
      expect(stylesText.textAlign).toBe('left')

      const stylesIcons = StyleSheet.flatten(ListItemIconsContainer.prop('style'))
      expect(stylesIcons.position).toBe('absolute')
      expect(stylesIcons.right).toBe(26)
      expect(stylesIcons.width).toBe(65)
      expect(stylesIcons.height).toBe(25)
      expect(stylesIcons.flexDirection).toBe('row')
      expect(stylesIcons.justifyContent).toBe('space-between')
      expect(stylesIcons.alignItems).toBe('center')
    })
  })
})
