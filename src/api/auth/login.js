import auth from '@react-native-firebase/auth'

/**
 *
 * @param {String} email firebase email
 * @param {String} password firebase password
 */
export const loginToFirebase = async (email, password) => {
  // sign in with RN Firebase
  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(async data => {
      const {
        additionalUserInfo: {isNewUser},
        user: {
          email,
          emailVerified: emailValidation,
          metadata: {creationTime, lastSignInTime: lastTimeLogged},
          uid,
        },
      } = data
      // user token
      const {token} = await auth().currentUser.getIdTokenResult()

      // informations to return
      const userInformations = {isNewUser, email, emailValidation, creationTime, uid, lastTimeLogged, token}

      return {success: true, userInformations}
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        return {success: false, error: 'passwordIncorrect'}
      }

      if (error.code === 'auth/user-not-found') {
        return {success: false, error: 'emailIncorrect'}
      }

      return {success: false, error: null}
    })
}

/**
 * Refresh firebase token if user exists
 * Returns null if there's no current user
 */
export const loginWithRefreshToken = () => {
  const idToken = auth().currentUser ? auth().currentUser.getIdToken(true) : null
  return idToken
}
