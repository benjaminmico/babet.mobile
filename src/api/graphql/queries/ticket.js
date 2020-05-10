import gql from 'graphql-tag'

/**
 * get user's ticket base on id
 */
export const getTicket = gql`
  query ticket($id: String) {
    ticket(id: $id) {
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
`
