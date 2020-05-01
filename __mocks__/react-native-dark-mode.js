jest.mock('react-native-dark-mode', () => ({
  ...jest.requireActual('react-native-dark-mode'),
  useDarkMode: jest.fn(),
}))
