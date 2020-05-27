/**
 * Edit a Bankroll
 * @param {*} state
 * @param {*} action
 */
export function editBankroll(state, action) {
  const {bankroll: editedBankroll} = action

  const bankrolls = state.items

  // get bankroll index to edit
  const bankrollToEditIndex = bankrolls.findIndex(bankroll => bankroll.id === editedBankroll.id)

  bankrolls[bankrollToEditIndex] = editedBankroll

  // update bankroll with edited item to the bankrolls store's list
  return {
    ...state,
    items: bankrolls,
  }
}
