import gql from 'graphql-tag'

/**
 * get user's bankrolls
 */
export const getBankrolls = gql`
  query bankrolls {
    bankrolls {
      id
      name
      creationDate
      updatedDate
      userId
    }
  }
`
