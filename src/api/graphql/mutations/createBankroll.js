import gql from 'graphql-tag'

/**
 * create bankroll
 */
export const createBankroll = gql`
  mutation createBankroll($name: String) {
    createBankroll(name: $name) {
      id
      name
      creationDate
      updatedDate
      userId
    }
  }
`
