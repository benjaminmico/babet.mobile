jest.mock('@react-native-community/async-storage', () => ({
  setItem: jest.fn(() => {
    return new Promise(resolve => {
      resolve(null)
    })
  }),
  multiSet: jest.fn(() => {
    return new Promise(resolve => {
      resolve(null)
    })
  }),
  getItem: jest.fn(() => {
    return new Promise(resolve => {
      resolve(JSON.stringify('mock'))
    })
  }),
  multiGet: jest.fn(() => {
    return new Promise(resolve => {
      resolve('multiGet')
    })
  }),
  removeItem: jest.fn(() => {
    return new Promise(resolve => {
      resolve(null)
    })
  }),
  getAllKeys: jest.fn(() => {
    return new Promise(resolve => {
      resolve(['one', 'two', 'three'])
    })
  }),
}))
