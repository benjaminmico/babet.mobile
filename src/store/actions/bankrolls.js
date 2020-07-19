// Set Bankrolls List
export const setBankrollsList = bankrolls => ({
  type: 'SET_BANKROLLS_LIST',
  bankrolls,
})

// Set Bankrolls List
export const setCurrentBankroll = bankroll => ({
  type: 'SET_CURRENT_BANKROLL',
  bankroll,
})

// Create bankroll
export const addBankroll = bankroll => ({
  type: 'ADD_BANKROLL',
  bankroll,
})

// Edit bankroll
export const editBankroll = bankroll => ({
  type: 'EDIT_BANKROLL',
  bankroll,
})

// Delete bankroll
export const deleteBankroll = bankroll => ({
  type: 'DELETE_BANKROLL',
  bankroll,
})
