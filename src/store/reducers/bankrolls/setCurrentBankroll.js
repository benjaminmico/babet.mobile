/**
 * Set Current Bankroll to add selected option on Profile
 * @param {*} state
 * @param {*} action
 */
export function setCurrentBankroll(state, action) {
  const {bankroll: actionBankroll} = action

  let bankrolls = state.items

  // get current selected bankroll or bankroll index
  const currentSelectedBankroll = bankrolls.find(bankroll => bankroll.id === actionBankroll.id)
  const currentSelectedBankrollIndex = bankrolls.findIndex(bankroll => bankroll.id === actionBankroll.id)

  /**
   * in case of a selected bankroll => set all bankrolls to false
   * return currentBankroll to null => it means that we display all tickets && data without bankroll filters
   * */
  if (currentSelectedBankroll?.selected) {
    bankrolls = bankrolls.map(bankroll => {
      return {...bankroll, selected: false}
    })

    return {
      ...state,
      currentBankroll: null,
      items: bankrolls,
    }
  }

  // set all bankrolls to false...
  bankrolls = bankrolls.map(bankroll => {
    return {...bankroll, selected: false}
  })
  // ...except currentSelectedBankroll
  bankrolls[currentSelectedBankrollIndex].selected = true

  // return all bankrolls with selected update for currentSelectedBankroll && add current bankroll
  return {...state, currentBankroll: actionBankroll, items: bankrolls}
}
