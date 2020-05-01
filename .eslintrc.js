module.exports = {
  root: true,
  extends: '@react-native-community',
  env: {
    jest: true,
    browser: true,
  },
  globals: {
    it: true,
    expect: true,
    window: true,
    fetch: true,
    FormData: true,
    __DEV__: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    'import/order': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-negated-condition': 2,
    'arrow-parens': [2, 'as-needed'],
    'no-template-curly-in-string': 0,
    'react/prop-types': 0,
    camelcase: 0,
    'react/jsx-curly-newline': 0,
    'import/no-named-as-default': 0,
    'no-console': [
      1,
      {
        allow: ['warn', 'error'],
      },
    ],
    // Fix when time will be ok...
    // 'sort-imports': [
    //   'error',
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     ignoreMemberSort: false,
    //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    //   },
    // ],
    'max-len': [2, 120],
    'implicit-arrow-linebreak': 'off', // fix conflict with max-len rule
    'no-confusing-arrow': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    semi: [0, 'never'],
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-duplicates': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'react/prefer-stateless-function': 0,
    'no-nested-ternary': 0,
  },
}
