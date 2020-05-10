import gql from 'graphql-tag'

/**
 * delete a bankroll
 */
export const deleteBankroll = gql`
  mutation deleteBankroll($id: String) {
    deleteBankroll(id: $id)
  }
`
