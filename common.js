module.exports = {
  plugins: [
    '@typescript-eslint',
    '@stylistic',
    'no-relative-import-paths',
    'disable-autofix'
  ],

  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:@typescript-eslint/recommended',
  ],

  globals: {
    process: 'readonly'
  },

  rules: {
    '@stylistic/key-spacing': [
      'error'
    ],

    '@stylistic/keyword-spacing': [
      'error'
    ],

    'no-unused-vars': [
      'warn'
    ],

    '@stylistic/jsx-quotes': [
      'error',
      'prefer-double'
    ],

    '@stylistic/template-curly-spacing': [
      'error',
      'never'
    ],

    '@stylistic/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      }
    ],

    '@stylistic/linebreak-style': [
      'error',
      'unix'
    ],

    '@stylistic/quotes': [
      'error',
      'single'
    ],

    '@stylistic/semi': [
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

    '@stylistic/comma-dangle': [
      'error',
      'always-multiline'
    ],

    '@stylistic/no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
        maxBOF: 0
      }
    ],

    '@stylistic/eol-last': [
      'error'
    ],

    'no-undef': [
      'error'
    ],

    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }
    ],

    '@stylistic/space-before-function-paren': [
      'error',
      'always'
    ],

    '@stylistic/func-call-spacing': [
      'error',
      'never',
    ],

    '@stylistic/object-curly-spacing': [
      'error',
      'always'
    ],

    '@stylistic/array-bracket-spacing': [
      'error',
      'never'
    ],

    '@stylistic/space-infix-ops': [
      'error'
    ],

    '@stylistic/space-before-blocks': [
      'error',
      'always'
    ],

    '@stylistic/arrow-spacing': [
      'error'
    ],
    
    '@stylistic/switch-colon-spacing': [
      'error'
    ],

    '@stylistic/space-in-parens': [
      'error',
      'never'
    ],

    '@stylistic/no-trailing-spaces': [
      'error'
    ],

    curly: [
      'error'
    ],

    '@stylistic/multiline-ternary': ['error', 'always-multiline'],

    '@stylistic/operator-linebreak': ['error', 'before', { overrides: { '&&': 'after' } }],

    '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],

    'disable-autofix/no-relative-import-paths/no-relative-import-paths': ['warn', { allowSameFolder: true }],
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
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          }
        ],
      },
    },
  ],

}
