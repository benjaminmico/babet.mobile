import gql from 'graphql-tag'

/**
 * set user informations
 */
export const setUserInformations = gql`
  mutation setUserInformations($firstname: String, $lastname: String) {
    setUserInformations(firstname: $firstname, lastname: $lastname) {
      uid
      firstname
      lastname
      email
      lastTimeLogged
      loginMethod
      emailValidation
    }
  }
`
