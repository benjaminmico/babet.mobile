import {ApolloProvider} from '@apollo/react-hooks'
import TabNavigator from '@navigators/TabNavigator'
import Navigator from '@navigators/Navigator'
import {NavigationContainer} from '@react-navigation/native'
import {HttpLink, InMemoryCache} from 'apollo-boost'
import {ApolloClient} from 'apollo-client'
import i18next from 'i18next'
import React from 'react'
import {initReactI18next} from 'react-i18next'
import * as RNLocalize from 'react-native-localize'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeContextProvider} from './src/core/themeProvider'
import en from './src/languages/en.json'
import fr from './src/languages/fr.json'
import {persistor, store} from './src/store/store'
import Toast from '@components/Alerts/Toast'

const token = store.getState().auth?.token || null

// get local language from device
const currentLanguage = RNLocalize.getLocales()[0].languageCode

// init language detector
const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb(currentLanguage),
  init: () => {},
  cacheUserLanguage: () => {},
}

/**
 * load each files traduction
 * if device language is not app ready, set en language
 * only two languages : en && fr
 */
i18next.use(languageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources: {
    en,
    fr,
  },
})

// graphQL client
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://us-central1-dev-babet.cloudfunctions.net/graphql',
    headers: {
      authorization: store.getState().auth?.token || '',
    },
  }),
  cache: new InMemoryCache(),
})
export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeContextProvider>
              <NavigationContainer>{token ? <TabNavigator /> : <Navigator />}</NavigationContainer>
              <Toast />
            </ThemeContextProvider>
          </PersistGate>
        </Provider>
      </ApolloProvider>
    )
  }
}
