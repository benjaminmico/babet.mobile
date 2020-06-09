/**
 * Tickets
 * @param {*} state
 * @param {*} action
 */
export function setTicketsList(state, action) {
  if (action?.tickets) {
    const {tickets, count} = action?.tickets

    return {
      ...state,
      items: [...state.items, ...tickets],
      count,
    }
  }
  return state
}
