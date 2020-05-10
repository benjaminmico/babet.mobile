import gql from 'graphql-tag'

/**
 * delete a ticket
 */
export const deleteTicket = gql`
  mutation deleteTicket($id: String) {
    deleteTicket(id: $id)
  }
`
