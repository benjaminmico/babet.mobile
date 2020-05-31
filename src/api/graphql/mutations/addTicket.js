import gql from 'graphql-tag'

/**
 * add a new ticket
 */

export const addTicket = gql`
  mutation addTicket($bets: [BetInput], $stake: Float, $bankrolls: [String]) {
    addTicket(bets: $bets, stake: $stake, bankrolls: $bankrolls) {
      id
      creationDate
      updatedDate
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
      stake
      globalOdd
      total
      status
      userId
    }
  }
`
