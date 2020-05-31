/**
 * Add Ticket
 * @param {*} state
 * @param {*} action
 */
export function addTicket(state, action) {
  if (action?.ticket) {
    const {ticket} = action

    console.log('ticket from store', ticket)
    return {
      ...state,
      items: [...state.items, ticket],
    }
  }
  return state
}
