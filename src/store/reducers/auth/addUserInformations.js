/**
 * Add User Informations
 * @param {*} state
 * @param {*} action
 */
export function addUserInformations(state, action) {
  if (action?.userInformations) {
    const {firstname, lastname, nickname, description} = action?.userInformations

    return {
      ...state,
      firstname,
      lastname,
      nickname,
      description,
      loggedIn: true,
    }
  }
  return state
}
