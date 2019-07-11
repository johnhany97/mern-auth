module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
    'react/prefer-stateless-function': 0
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ecmaVersion: 2018,
      sourceType: 'module'
    },
  },
  parser: "babel-eslint",
};
