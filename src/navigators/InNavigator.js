import {ApolloProvider} from '@apollo/react-hooks'
import BottomTab from '@components/Navigation/Tabs/BottomTab'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import AddTicketScreen from '@screens/AddTicket/AddTicketScreen'
import MainScreen from '@screens/Main'
import {HttpLink, InMemoryCache} from 'apollo-boost'
import {ApolloClient} from 'apollo-client'
import React from 'react'
import {useSelector} from 'react-redux'

/**
 * Signed in screens
 */
const InNavigator = () => {
  const InTab = createMaterialTopTabNavigator()

  const {
    auth: {token},
  } = useSelector(state => state)

  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:5000/dev-babet/us-central1/graphql',
      headers: {
        authorization: token,
      },
    }),
    cache: new InMemoryCache(),
  })

  return (
    <ApolloProvider client={client}>
      <InTab.Navigator
        tabBarPosition="bottom"
        tabBar={props => <BottomTab {...props} />}
        initialRouteName="AddTicketScreen"
      >
        <InTab.Screen name="AddTicketScreen" component={AddTicketScreen} options={{headerShown: false}} />
        <InTab.Screen name="ProfileScreen" component={MainScreen} />
      </InTab.Navigator>
    </ApolloProvider>
  )
}

export default InNavigator
