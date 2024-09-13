module.exports = {
  extends: [
    './common',
    './tailwind',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  env: {
    browser: true,
  },

  globals: {
    JSX: true,
  },

  rules: {
    'react/react-in-jsx-scope': 'off',

    '@stylistic/jsx-max-props-per-line': [
      'error',
      {
        maximum: {
          single: 2,
          multi: 1,
        },
      }
    ],

    '@stylistic/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop'
    ],

    '@stylistic/jsx-closing-bracket-location': [
      'error',
      {
        location: 'tag-aligned'
      }
    ],

    '@stylistic/jsx-quotes': [
      'error',
      'prefer-double',
    ],

    '@stylistic/jsx-curly-spacing': [
      'error',
      'never',
    ],

    '@stylistic/jsx-tag-spacing': [
      'error',
      {
        beforeClosing: 'never',
      }
    ],

    '@stylistic/jsx-indent': [
      'error',
      2,
    ]
  }
}
