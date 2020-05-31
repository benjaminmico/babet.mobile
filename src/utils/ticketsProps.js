/* eslint-disable no-negated-condition */

/**
 * Find ticket global odd, status (pending, won or lost) && total gains
 * @param {Object} ticket on which we want to calculcate props
 * @return {Object} ticket with added props
 */
const ticketProps = ticket => {
  const {bets, stake} = ticket

  let globalOdd = 1.0
  const status =
    bets.filter(bet => bet.status === 'lost').length !== 0
      ? 'lost'
      : bets.filter(bet => bet.status === 'pending').length !== 0
      ? 'pending'
      : 'won'

  bets.forEach(async bet => {
    globalOdd *= bet.odd
  })

  const total = stake * globalOdd

  return {...ticket, stake, status, globalOdd, total, updatedDate: Date.now()}
}

export default ticketProps
