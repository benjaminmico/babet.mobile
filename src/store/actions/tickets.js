// Ticket
export const setTicketsList = tickets => ({
  type: 'SET_TICKETS_LIST',
  tickets,
})

export const addTicket = ticket => ({
  type: 'ADD_TICKET',
  ticket,
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
