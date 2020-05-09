import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {ThemeContextProvider} from './src/core/themeProvider'
import MainScreen from './src/screens/Main'
import SettingsScreen from './src/screens/Settings'
import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import en from './src/languages/en.json'
import fr from './src/languages/fr.json'
import * as RNLocalize from 'react-native-localize'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from 'react-redux'

// Imports: Redux Persist Persister
import {store, persistor} from './src/store/store'

const Tab = createBottomTabNavigator()

// create Bottom Tab of the app
const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

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

export default class App extends React.Component {
  render() {
    // set ThemeContext as High Order Component
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContextProvider>
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>
          </ThemeContextProvider>
        </PersistGate>
      </Provider>
    )
  }
}
