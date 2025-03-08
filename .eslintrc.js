module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    semi: ['off'],
    quotes: ['error', 'single'],
    'react/no-unstable-nested-components': 'off',
    'no-use-before-define': ['off'],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
