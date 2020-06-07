/**
 * Add Ticket
 * @param {*} state
 * @param {*} action
 */
export function addTicket(state, action) {
  if (action?.ticket) {
    const {ticket} = action

    const {items} = state

    items.unshift(ticket)

    return {
      ...state,
      items,
    }
  }
  return state
}
