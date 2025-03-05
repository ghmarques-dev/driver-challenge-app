module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: ['off'],
    quotes: ['error', 'single'],
    'no-use-before-define': ['off'],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
  },
}
