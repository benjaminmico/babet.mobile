/**
 * Login
 * @param {*} state
 * @param {*} action
 */
export function login(state, action) {
  console.log('action', action.userInformations)
  const {
    isNewUser,
    firstname,
    lastname,
    email,
    emailValidation,
    creationTime,
    lastTimeLogged,
    uid,
    token,
  } = action.userInformations
  return {
    ...state,
    isNewUser,
    firstname,
    lastname,
    email,
    emailValidation,
    creationTime,
    lastTimeLogged,
    uid,
    token,
    loggedIn: true,
  }
}
