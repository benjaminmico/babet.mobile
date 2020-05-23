import auth from '@react-native-firebase/auth'

/**
 *
 * Check if current user exists
 * @returns {Object} if exists return success else return false success && error
 */
const getCurrentUser = async () => {
  // sign in with RN Firebase
  return auth()
    .currentUser?.getIdTokenResult()
    .then(async user => {
      if (user.token) return {success: true, error: false}
      return {success: false, error: true}
    })
    .catch(() => {
      return {success: false, error: true}
    })
}

export default getCurrentUser
