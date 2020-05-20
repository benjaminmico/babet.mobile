import gql from 'graphql-tag'

/**
 * edit bankroll
 */
export const editBankroll = gql`
  mutation editBankroll($id: String, $name: String) {
    editBankroll(id: $id, name: $name) {
      id
      name
      creationDate
      updatedDate
      userId
    }
  }
`
