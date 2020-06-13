import {ApolloProvider} from '@apollo/react-hooks'
import BottomTab from '@components/Navigation/Tabs/BottomTab'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import AddTicketScreen from '@screens/ProcessTickets/AddTicketScreen'
import ProfileScreen from '@screens/ProfileScreen'
import {HttpLink, InMemoryCache} from 'apollo-boost'
import {ApolloClient} from 'apollo-client'
import React from 'react'
import {useSelector} from 'react-redux'
import headerStyle from './utils/headerStyle'

/**
 * Signed in screens
 */
const TabNavigator = () => {
  const InTab = createMaterialTopTabNavigator()

  const {
    auth: {token},
  } = useSelector(state => state)

  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'https://us-central1-dev-babet.cloudfunctions.net/graphql',
      headers: {
        authorization: token,
      },
    }),
    cache: new InMemoryCache(),
  })

  console.log('client', client)

  return (
    <ApolloProvider client={client}>
      <InTab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <BottomTab {...props} />}
        initialRouteName="AddTicketScreen"
        options={headerStyle('LoginScreen', 'Login', true)}
      >
        <InTab.Screen name="AddTicketScreen" component={AddTicketScreen} />
        <InTab.Screen name="ProfileScreen" component={ProfileScreen} />
      </InTab.Navigator>
    </ApolloProvider>
  )
}

export default TabNavigator
