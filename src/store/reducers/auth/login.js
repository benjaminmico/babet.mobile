/**
 * Login
 * @param {*} state
 * @param {*} action
 */
export function login(state, action) {
  console.log('actions aaa', action?.userInformations)

  if (action?.userInformations) {
    const {isNewUser, email, emailValidation, creationTime, lastTimeLogged, uid, token} = action?.userInformations

    return {
      ...state,
      isNewUser,
      email,
      emailValidation,
      creationTime,
      lastTimeLogged,
      uid,
      token,
      loggedIn: true,
    }
  }
  return state
}
