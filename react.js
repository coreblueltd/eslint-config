module.exports = {
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    '@coreblue/eslint-config/common',
  ],

  env: {
    browser: true,
  },

  globals: {
    JSX: true,
  },

  rules: {
    'react/react-in-jsx-scope': 'off',

    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: {
          single: 2,
          multi: 1,
        },
      }
    ],

    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop'
    ],

    'react/jsx-closing-bracket-location': [
      'error',
      {
        location: 'tag-aligned'
      }
    ],

    'jsx-quotes': [
      'error',
      'prefer-double',
    ],

    'react/jsx-curly-spacing': [
      'error',
      'never',
    ],

    'react/jsx-tag-spacing': [
      'error',
      {
        beforeClosing: 'never',
      }
    ]
  }
}
