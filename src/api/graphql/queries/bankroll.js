import gql from 'graphql-tag'

/**
 * get user's bankroll
 */
export const getBankroll = gql`
  query bankroll($id: String) {
    bankroll(id: $id) {
      id
      name
      creationDate
      updatedDate
      userId
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
