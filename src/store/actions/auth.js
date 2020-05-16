// Login
export const login = userInformations => ({
  type: 'LOGIN',
  userInformations,
})

// Logout
export const logout = () => {
  console.log('okkkk')
  return {
    type: 'LOGOUT',
  }
}

// Add User Informations
export const addUserInformations = userInformations => ({
  type: 'ADD_USER_INFORMATIONS',
  userInformations,
})
