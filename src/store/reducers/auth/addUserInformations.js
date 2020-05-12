/**
 * Add User Informations
 * @param {*} state
 * @param {*} action
 */
export function addUserInformations(state, action) {
  if (action?.userInformations) {
    const {firstname, lastname} = action?.userInformations

    return {
      ...state,
      firstname,
      lastname,
      loggedIn: true,
    }
  }
  return state
}
