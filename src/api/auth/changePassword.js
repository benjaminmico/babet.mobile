import auth from '@react-native-firebase/auth'

/**
 *
 * @param {String} password firebase password to update
 */
export const changePassword = async password => {
  // sign in with RN Firebase
  await auth().currentUser.updatePassword(password)
  return {success: true}
}
