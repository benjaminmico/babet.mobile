import gql from 'graphql-tag'

/**
 * get user's tickets
 */

export const getTickets = gql`
  query($offset: Int, $limit: Int) {
    tickets(offset: $offset, limit: $limit) {
      count
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
