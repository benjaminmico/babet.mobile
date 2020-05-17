import auth from '@react-native-firebase/auth'

// logout with RN Firebase
export const logout = async () => {
  return auth()
    .signOut()
    .then(() => {
      return {success: true}
    })
}
