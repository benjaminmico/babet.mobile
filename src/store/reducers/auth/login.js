/**
 * Login
 * @param {*} state
 * @param {*} action
 */
export function login(state, action) {
  return {
    // State
    ...state,
    // Redux Store
    loggedIn: action.trueFalse,
  }
}
