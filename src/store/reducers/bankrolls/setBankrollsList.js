/**
 * Set Bankrolls List
 * @param {*} state
 * @param {*} action
 */
export function setBankrollsList(state, action) {
  //   const {bankrolls: stateBankrolls} = state
  const {bankrolls: actionBankrolls} = action

  const bankrollsWithUnselectedProp = actionBankrolls.map(bankroll => {
    return {...bankroll, selected: false}
  })

  //   const bankrollsToAdd = stateBankrolls?.length
  //     ? stateBankrolls.filter(({id: id1}) => !actionBankrolls.some(({id: id2}) => id2 === id1))
  //     : actionBankrolls

  return {...state, items: bankrollsWithUnselectedProp}
}
