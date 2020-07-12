import Toast from '@components/Alerts/Toast'
import {ToastProvider} from '@components/Alerts/Toast/ToastContext'
import Navigator from '@navigators/Navigator'
import {NavigationContainer} from '@react-navigation/native'
import i18next from 'i18next'
import React, {useEffect, useRef} from 'react'
import {initReactI18next} from 'react-i18next'
import {AppState} from 'react-native'
import * as RNLocalize from 'react-native-localize'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeContextProvider} from './src/core/themeProvider'
import en from './src/languages/en.json'
import fr from './src/languages/fr.json'
import {persistor, store} from './src/store/store'
import auth from '@react-native-firebase/auth'

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

console.log('ok')

const App = () => {
  const appState = useRef(AppState.currentState)

  async function getIdToken() {
    const idTokenResult = await auth().currentUser.getIdTokenResult()
    console.log('User JWT: ', idTokenResult)
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

  return (
    <ToastProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContextProvider>
            <NavigationContainer>
              <Navigator />
            </NavigationContainer>
            <Toast />
          </ThemeContextProvider>
        </PersistGate>
      </Provider>
    </ToastProvider>
  )
}
export default App
