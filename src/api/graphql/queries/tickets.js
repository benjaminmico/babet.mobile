import gql from 'graphql-tag'

/**
 * get user's tickets
 */

export const getTickets = gql`
  query($page: Int) {
    tickets(page: $page) {
      count
      totalPages
      currentPage
      tickets {
        id
        updatedDate
        stake
        globalOdd
        total
        status
        userId
        bankrolls
        bets {
          id
          creationDate
          updatedDate
          sport
          localTeam
          visitorTeam
          name
          odd
          status
          ticketId
          specialBet
          userId
        }
      }
    }
  }
`
