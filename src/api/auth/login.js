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
        user,
        user: {
          email,
          emailVerified: emailValidation,
          metadata: {creationTime, lastSignInTime: lastTimeLogged},
          uid,
        },
      } = data
      // user token
      console.log('user', user)
      const tokensData = await auth().currentUser?.getIdTokenResult()

      if (tokensData) {
        // informations to return
        const userInformations = {
          isNewUser,
          email,
          emailValidation,
          creationTime,
          uid,
          lastTimeLogged,
          token: tokensData.token,
        }

        return {success: true, userInformations}
      }
      return {success: false, error: 'unknown'}
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        return {success: false, error: 'passwordIncorrect'}
      }

      if (error.code === 'auth/user-not-found') {
        return {success: false, error: 'emailIncorrect'}
      }

      if (error.code === 'auth/too-many-requests') {
        return {success: false, error: 'tooManyRequests'}
      }

      return {success: false, error: 'unknown'}
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
