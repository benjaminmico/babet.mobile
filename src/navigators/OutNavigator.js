import InNavigator from '@navigators/InNavigator'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '@screens/Login/LoginScreen'
import React from 'react'
import {useSelector} from 'react-redux'
import headerStyle from './utils/headerStyle'

/**
 * Onboarding && Login Screens Navigators
 */
const OutNavigator = () => {
  const OutTab = createStackNavigator()

  const {
    auth: {token},
  } = useSelector(state => state)

  return (
    <OutTab.Navigator options={{}} initialRouteName={token ? 'InNavigator' : 'LoginScreen'}>
      <OutTab.Screen name="LoginScreen" component={LoginScreen} options={headerStyle('LoginScreen', 'Login', true)} />
      <OutTab.Screen
        name="InNavigator"
        component={InNavigator}
        options={{gestureEnabled: false, headerShown: false, animationEnabled: false}}
      />
    </OutTab.Navigator>
  )
}

export default OutNavigator
