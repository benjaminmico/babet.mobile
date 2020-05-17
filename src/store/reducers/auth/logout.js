import {initialMode} from 'react-native-dark-mode'
import * as RNLocalize from 'react-native-localize'
/**
 * logout
 */
export function logout() {
  return {
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
}
