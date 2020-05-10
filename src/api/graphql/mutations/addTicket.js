import gql from 'graphql-tag'

/**
 * add a new ticket
 */
export const addTicket = gql`
  mutation addTicket(
    $bets: [BetInput]
    $stake: Float
    $globalOdd: Float
    $total: Float
    $status: String
    $bankrolls: [String]
  ) {
    addTicket(
      bets: $bets
      stake: $stake
      globalOdd: $globalOdd
      total: $total
      status: $status
      bankrolls: $bankrolls
    ) {
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
