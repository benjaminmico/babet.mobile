/**
 * Add Ticket
 * @param {*} state
 * @param {*} action
 */
export function addTicket(state, action) {
  if (action?.ticket) {
    const {ticket} = action

    const {items, count} = state

    // add ticket at top of the list
    items.unshift(ticket)

    return {
      ...state,
      // increment ticket counter
      count: count + 1,
      items,
    }
  }
  return state
}
