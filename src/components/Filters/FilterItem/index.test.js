/**
 * @jest-environment jsdom
 */
import React from 'react'
import {StyleSheet} from 'react-native'
import {ThemeContextProvider} from '@core/themeProvider'
import {shallow, mount} from 'enzyme'
import FilterItem from '.'

describe.only('./FilterItem', () => {
  describe('Integrity tests', () => {
    it('renders FilterItem correctly', () => {
      const wrapper = shallow(
        <ThemeContextProvider>
          <FilterItem index={0} label="aaaaa" />
        </ThemeContextProvider>,
      )

      expect(wrapper).toMatchSnapshot()
    })
    // it('renders InputAction with Left Button correctly', () => {
    //   const wrapper = shallow(<InputAction leftButton />)

    //   const LeftButton = wrapper.findWhere(node => node.prop('testID') === 'LEFT_BUTTON')

    //   expect(LeftButton.exists()).toBe(true)
    // })

    // it('renders InputAction without Left Button correctly', () => {
    //   const wrapper = shallow(<InputAction />)

    //   const LeftButton = wrapper.findWhere(node => node.prop('testID') === 'LEFT_BUTTON')

    //   expect(LeftButton.exists()).toBe(false)
    // })

    // it('renders InputAction with a placeholder', () => {
    //   const wrapper = shallow(<InputAction leftButton placeholder="Enter your message" />)

    //   const InputComponent = wrapper.findWhere(node => node.prop('testID') === 'INPUT_COMPONENT')

    //   expect(InputComponent.prop('placeholder')).toBe('Enter your message')
    // })

    // it('renders InputAction with Button Container correctly', () => {
    //   const wrapper = shallow(<InputAction leftButton />)

    //   const ButtonContainer = wrapper.findWhere(node => node.prop('testID') === 'BUTTON_CONTAINER')

    //   expect(ButtonContainer.exists()).toBe(true)
    // })

    // it('renders InputAction with a predefined value correctly', () => {
    //   const wrapper = shallow(<InputAction value="This is my message" />)

    //   const InputComponent = wrapper.findWhere(node => node.prop('testID') === 'INPUT_COMPONENT')

    //   expect(InputComponent.prop('value')).toBe('This is my message')
    // })
  })

  describe('Props tests', () => {
    it('renders selected FilterItem', () => {
      const wrapper = mount(
        <ThemeContextProvider>
          <FilterItem index={0} label="aaaaa" />
        </ThemeContextProvider>,
      )

      const FilterItemContainer = wrapper.find('TouchableOpacity').first()

      expect(wrapper).toMatchSnapshot()

      const styles = StyleSheet.flatten(FilterItemContainer.prop('style'))
      expect(styles.backgroundColor).toBe('transparent')
      expect(styles.borderRadius).toBe(8)
      expect(styles.marginTop).toBe(0)
      expect(styles.width).toBe(74)
      expect(styles.height).toBe(24)
      expect(styles.justifyContent).toBe('center')
      expect(styles.alignItems).toBe('center')
      //   expect(componentStyles.alignItems).toBe('center')
      //   expect(componentStyles.width).toBe(DIMENSIONS_WIDTH)
      //   expect(componentStyles.backgroundColor).toBe('white')
      //   expect(componentStyles.paddingBottom).toBe(0)
      // })
    })
  })
})
