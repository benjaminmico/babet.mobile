/**
 * Stats
 * @param {*} state
 * @param {*} action
 */
export function setStats(state, action) {
  if (action?.stats) {
    const {ticketsLength, averageOdd, averageStake, balanceSheet, shape} = action?.stats

    return {
      ...state,
      ticketsLength,
      averageOdd,
      averageStake,
      balanceSheet,
      shape,
    }
  }
  return state
}

/**
 * Stats
 * @param {*} state
 * @param {*} action
 */
export function updateStats(state, action) {
  if (action?.stats) return action.stats
  return state
}
