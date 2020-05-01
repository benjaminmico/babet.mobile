module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  modulePathIgnorePatterns: ['e2e'],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  transformIgnorePatterns: [
    // eslint-disable-next-line max-len
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
  ],
  testResultsProcessor: '<rootDir>/node_modules/jest-html-reporter',
  coverageDirectory: '<rootDir>/__coverage__',
  moduleNameMapper: {
    'styled-components': '<rootDir>/node_modules/styled-components/native/dist/styled-components.native.cjs.js',
    'react-native-doc-viewer': '<rootDir>/mocks/react-native-doc-viewer.js',
  },
}
