import gql from 'graphql-tag'

/**
 * create bankroll
 */
export const addBankroll = gql`
  mutation addBankroll($name: String) {
    addBankroll(name: $name) {
      id
      name
      creationDate
      updatedDate
      userId
    }
  }
`
