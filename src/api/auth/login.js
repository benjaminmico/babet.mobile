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
      const userFirebaseInformations = {isNewUser, email, emailValidation, creationTime, uid, lastTimeLogged, token}

      return userFirebaseInformations
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!')
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!')
      }

      console.error(error)
    })
}
