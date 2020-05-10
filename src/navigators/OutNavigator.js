import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '@screens/Login/LoginScreen'
import {headerStyle} from './utils/headerStyle'

/**
 * Onboarding && Login Screens Navigators
 */
const OutNavigator = () => {
  const OutTab = createStackNavigator()

  return (
    <OutTab.Navigator options={{}}>
      <OutTab.Screen name="Login" component={LoginScreen} options={headerStyle('Login', true)} />
    </OutTab.Navigator>
  )
}

export default OutNavigator
