export const createReducer = (strategyMap, initialState) => (state = initialState, action) => {
  if (!strategyMap[action.type]) {
    return state
  }

  return strategyMap[action.type](state, action)
}
