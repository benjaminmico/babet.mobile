// Ticket
export const setStats = stats => ({
  type: 'SET_STATS',
  stats,
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
