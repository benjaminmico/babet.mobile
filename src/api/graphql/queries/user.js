import gql from 'graphql-tag'

/**
 * get user informations
 */
export const getUserInformations = gql`
  query user {
    user {
      uid
      firstname
      lastname
      nickname
      description
      email
      loginMethod
      emailValidation
    }
  }
`
