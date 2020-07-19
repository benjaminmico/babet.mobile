/**
 * Create a Bankroll
 * @param {*} state
 * @param {*} action
 */
export function addBankroll(state, action) {
  const {bankroll: createdBankroll} = action

  const bankrolls = state.items

  // add created bankroll to the bankrolls store's list
  return {
    ...state,
    items: [...bankrolls, createdBankroll],
  }
}
