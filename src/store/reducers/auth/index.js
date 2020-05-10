import {createReducer} from '../reducerFactory'

import {login} from './login'

import {initialMode} from 'react-native-dark-mode'
import * as RNLocalize from 'react-native-localize'

// Default State
const defaultState = {
  loggedIn: false,
  email: null,
  emailValidation: null,
  firstname: null,
  lastname: null,
  creationTime: null,
  lastTimeLogged: null,
  isNewUser: null,
  loginMethod: null,
  uid: null,
  deviceId: null,
  deviceName: null,
  deviceTheme: initialMode,
  locale: RNLocalize.getLocales()[0]?.languageCode || 'en',
  token: null,
  fcmToken: null,
}

const strategies = {
  /* login */
  LOGIN: login,
  /* commons */
  __default__: state => state,
}

// Exports
export default createReducer(strategies, defaultState)
