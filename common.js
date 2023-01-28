module.exports = {
  plugins: [
    '@typescript-eslint'
  ],

  globals: {
    process: 'readonly'
  },

  rules: {
    'key-spacing': [
      'error'
    ],

    'keyword-spacing': [
      'error'
    ],

    'no-unused-vars': [
      'warn'
    ],

    'jsx-quotes': [
      'error',
      'prefer-double'
    ],

    'template-curly-spacing': [
      'error',
      'never'
    ],

    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      }
    ],

    'linebreak-style': [
      'error',
      'unix'
    ],

    quotes: [
      'error',
      'single'
    ],

    semi: [
      'error',
      'never'
    ],

    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true
      }
    ],

    'comma-dangle': [
      'error',
      'always-multiline'
    ],

    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
        maxBOF: 0
      }
    ],

    'eol-last': [
      'error'
    ],

    'no-undef': [
      'error'
    ],

    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      }
    ]
  },

  overrides: [
    {
      files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
          }
        ],
      },
    },
  ],

}
