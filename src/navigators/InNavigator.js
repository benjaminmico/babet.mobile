import BottomTab from '@components/Navigation/Tabs/BottomTab'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import AddTicketScreen from '@screens/AddTicket/AddTicketScreen'
import SettingsScreen from '@screens/Settings'
import React from 'react'

/**
 * Signed in screens
 */
const InNavigator = () => {
  const InTab = createMaterialTopTabNavigator()

  return (
    <InTab.Navigator
      tabBarPosition="bottom"
      tabBar={props => <BottomTab {...props} />}
      initialRouteName="AddTicketScreen"
    >
      <InTab.Screen name="AddTicketScreen" component={AddTicketScreen} options={{headerShown: false}} />
      <InTab.Screen name="ProfileScreen" component={SettingsScreen} />
    </InTab.Navigator>
  )
}

export default InNavigator
