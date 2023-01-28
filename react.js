module.exports = {
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
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

    'jsx-quotes': [
      'error',
      'prefer-double',
    ]
  }
}
