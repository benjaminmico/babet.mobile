import {ApolloProvider} from '@apollo/react-hooks'
import TabNavigator from '@navigators/TabNavigator'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '@screens/Login/LoginScreen'
import ConfirmTicketScreen from '@screens/ProcessTickets/ConfirmTicketScreen'
import ChangePasswordScreen from '@screens/Settings/ChangePasswordScreen'
import MyBankrollsScreen from '@screens/Settings/MyBankrollsScreen'
import MyInformationsScreen from '@screens/Settings/MyInformationsScreen'
import PrivacyScreen from '@screens/Settings/PrivacyScreen'
import SettingsScreen from '@screens/Settings/SettingsScreen'
import {HttpLink, InMemoryCache} from 'apollo-boost'
import {AppState} from 'react-native'
import {ApolloClient} from 'apollo-client'
import React, {useEffect, useState, useRef} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import headerStyle from './utils/headerStyle'
import {loginWithRefreshToken} from '@api/auth/login'
import auth from '@react-native-firebase/auth'
import {refreshToken} from '@store/actions/auth'
/**
 * Onboarding && Login Screens Navigators
 */
const Navigator = () => {
  const {
    auth: {token},
  } = useSelector(state => state)

  const dispatch = useDispatch()

  const [stateToken, setStateToken] = useState(token)

  const appState = useRef(AppState.currentState)

  async function getIdToken() {
    const idTokenResult = await auth().currentUser.getIdToken()
    console.log('User JWT from navigation: ', idTokenResult)
    setStateToken(idTokenResult)
    dispatch(refreshToken(idTokenResult))
  }

  const _handleAppStateChange = nextAppState => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
      getIdToken()
    }

    appState.current = nextAppState
  }

  useEffect(() => {
    AppState.addEventListener('change', _handleAppStateChange)

    return () => {
      AppState.removeEventListener('change', _handleAppStateChange)
    }
  }, [])

  /**
   * get token from loginWithRefreshToken actions (onAuthStateChanged)
   * token should be refreshed by this action if exists and also persist session
   * if there's no user it returned null
   * token (or not) is store on local state stateToken
   * */
  useEffect(() => {
    async function getToken() {
      const tokenValue = await loginWithRefreshToken()
      setStateToken(tokenValue)
    }
    getToken()
  }, [token])

  const OutTab = createStackNavigator()

  // Apollo Client Client graphQL, depending on token session (handle on back-end)
  const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:5000/dev-babet/us-central1/graphql',
      headers: {
        authorization: stateToken,
      },
    }),
    cache: new InMemoryCache(),
  })

  // if token, it displays Authorized screens...TabNavigator else it returns login screen
  return (
    <ApolloProvider client={client}>
      <OutTab.Navigator options={{}} initialRouteName={stateToken ? 'TabNavigator' : 'LoginScreen'}>
        <OutTab.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{...headerStyle('LoginScreen', 'Login', true), animationEnabled: false}}
        />

        <OutTab.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{gestureEnabled: false, headerShown: false, animationEnabled: false}}
        />
        <OutTab.Screen
          name="ConfirmTicketScreen"
          component={ConfirmTicketScreen}
          options={{headerShown: false, animationEnabled: false}}
        />
        <OutTab.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={headerStyle('SettingsScreen', 'Settings', true)}
        />
        <OutTab.Screen
          name="MyBankrollsScreen"
          component={MyBankrollsScreen}
          options={headerStyle('MyBankrollsScreen', 'MyBankrolls', true)}
        />
        <OutTab.Screen
          name="MyInformationsScreen"
          component={MyInformationsScreen}
          options={headerStyle('MyInformationsScreen', 'MyInformations', true)}
        />
        <OutTab.Screen
          name="ChangePasswordScreen"
          component={ChangePasswordScreen}
          options={headerStyle('ChangePasswordScreen', 'ChangePassword', true)}
        />
        <OutTab.Screen
          name="PrivacyScreen"
          component={PrivacyScreen}
          options={headerStyle('PrivacyScreen', 'Privacy', true)}
        />
      </OutTab.Navigator>
    </ApolloProvider>
  )
}

export default Navigator
