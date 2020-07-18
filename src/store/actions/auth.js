// Login
export const login = userInformations => ({
  type: 'LOGIN',
  userInformations,
})

// Logout
export const logout = () => {
  return {
    type: 'LOGOUT',
  }
}

// Add User Informations
export const addUserInformations = userInformations => ({
  type: 'ADD_USER_INFORMATIONS',
  userInformations,
})

// Refresh token
export const refreshToken = token => ({
  type: 'REFRESH_TOKEN',
  token,
})
