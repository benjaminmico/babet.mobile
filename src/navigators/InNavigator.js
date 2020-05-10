import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import MainScreen from '@screens/Main'
import SettingsScreen from '@screens/Settings'
import BottomTab from '@components/Navigation/Tabs/BottomTab'

/**
 * Signed in screens
 */
const InNavigator = () => {
  const InTab = createStackNavigator()

  return (
    <InTab.Navigator tabBar={props => <BottomTab {...props} />}>
      <InTab.Screen name="AddTicket" component={MainScreen} />
      <InTab.Screen name="Profile" component={SettingsScreen} />
    </InTab.Navigator>
  )
}

export default InNavigator
