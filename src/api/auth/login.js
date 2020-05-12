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
      console.log('error')
      if (error.code === 'auth/wrong-password') {
        return {success: false, error: 'passwordIncorrect'}
      }

      if (error.code === 'auth/user-not-found') {
        console.log('That email address is invalid!')
        return {success: false, error: 'emailIncorrect'}
      }

      return {success: false, error: null}
    })
}
