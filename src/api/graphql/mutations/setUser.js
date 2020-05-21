import gql from 'graphql-tag'

/**
 * set user informations
 */
export const setUserInformations = gql`
  mutation setUserInformations($firstname: String, $lastname: String, $nickname: String, $description: String) {
    setUserInformations(firstname: $firstname, lastname: $lastname, nickname: $nickname, description: $description) {
      uid
      firstname
      lastname
      nickname
      description
      email
      lastTimeLogged
      loginMethod
      emailValidation
    }
  }
`
