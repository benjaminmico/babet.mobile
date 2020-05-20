/**
 * Delete a Bankroll
 * @param {*} state
 * @param {*} action
 */
export function deleteBankroll(state, action) {
  const {bankroll: deletedBankroll} = action

  const bankrolls = state.items

  // get bankrolls without deleted item && returned them on items store
  const bankrollsWithoutDeletedItem = bankrolls.filter(bankroll => bankroll.id !== deletedBankroll.id)

  return {
    ...state,
    items: bankrollsWithoutDeletedItem,
  }
}
