/**
 * Tickets
 * @param {*} state
 * @param {*} action
 */
export function setTicketsList(state, action) {
  if (action?.tickets) {
    const {tickets, count, totalPages, currentPage} = action?.tickets

    return {
      ...state,
      items: [...state.items, ...tickets],
      count,
      totalPages,
      currentPage,
    }
  }
  return state
}
