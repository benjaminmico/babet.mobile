// Login
export const login = userInformations => ({
  type: 'LOGIN',
  userInformations,
})

// Add User Informations
export const addUserInformations = userInformations => ({
  type: 'ADD_USER_INFORMATIONS',
  userInformations,
})
