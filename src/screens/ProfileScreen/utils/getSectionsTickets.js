import moment from 'moment'

/**
 * Filtering tickets by sections (week, lastWeek, longTimeAgo) by default
 * @param {[Object]} tickets tickets from store
 * @param {String} filter label's filter
 * @returns {[Object]} section's tickets array
 */
export const getSectionsTickets = (tickets, filter) => {
  const ticketsToReturn = []

  if (filter === 'week') {
    tickets.forEach(ticket => {
      if (parseInt(ticket.updatedDate, 0) > moment(moment().subtract(8, 'days')).valueOf()) ticketsToReturn.push(ticket)
    })
  }
  if (filter === 'lastWeek') {
    tickets.forEach(ticket => {
      if (
        parseInt(ticket.updatedDate, 0) < moment(moment().subtract(8, 'days')).valueOf() &&
        parseInt(ticket.updatedDate, 0) > moment(moment().subtract(15, 'days')).valueOf()
      )
        ticketsToReturn.push(ticket)
    })
  }
  if (filter === 'longTimeAgo') {
    tickets.forEach(ticket => {
      if (parseInt(ticket.updatedDate, 0) < moment(moment().subtract(15, 'days')).valueOf())
        ticketsToReturn.push(ticket)
    })
  }

  return ticketsToReturn
}
