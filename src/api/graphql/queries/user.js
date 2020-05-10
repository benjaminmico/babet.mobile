import gql from 'graphql-tag'

export const getUser = gql`
  query user {
    user {
      uid
      firstname
      lastname
      email
      loginMethod
      emailValidation
    }
  }
`
