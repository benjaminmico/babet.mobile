/**
 * Stats
 * @param {*} state
 * @param {*} action
 */
export function setStats(state, action) {
  if (action?.stats) {
    const {averageOdd, averageStake, balanceSheet, shape} = action?.stats

    return {
      ...state,
      averageOdd,
      averageStake,
      balanceSheet,
      shape,
    }
  }
  return state
}
