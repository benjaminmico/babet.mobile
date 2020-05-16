import TabNavigator from '@navigators/TabNavigator'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '@screens/Login/LoginScreen'
import React from 'react'
import {useSelector} from 'react-redux'
import headerStyle from './utils/headerStyle'
import SettingsScreen from '@screens/Settings/SettingsScreen'

/**
 * Onboarding && Login Screens Navigators
 */
const Navigator = () => {
  const OutTab = createStackNavigator()

  const {
    auth,
    auth: {token},
  } = useSelector(state => state)

  console.log('auth', auth)
  return (
    <OutTab.Navigator options={{}} initialRouteName={token ? 'TabNavigator' : 'LoginScreen'}>
      <OutTab.Screen name="LoginScreen" component={LoginScreen} options={headerStyle('LoginScreen', 'Login', true)} />
      <OutTab.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{gestureEnabled: false, headerShown: false, animationEnabled: false}}
      />
      <OutTab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={headerStyle('SettingsScreen', 'Settings', true)}
      />
    </OutTab.Navigator>
  )
}

export default Navigator
