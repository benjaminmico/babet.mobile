/**
 * Refresh token
 * @param {*} state
 * @param {*} action
 */
export default function refreshToken(state, action) {
  if (action?.token) {
    const {token} = action

    return {
      ...state,
      token,
    }
  }
  return state
}
