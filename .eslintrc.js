module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
        'nenerator-start-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': ["error", "never"],
        'no-unsafe-finally': 0,
        'no-return-assign': 0,
        'comma-dangle': ['error', "always-multiline"],
        'space-before-function-paren': ['error', 'never'],
        'space-before-blocks': ['error', 'never'],
        'keyword-spacing': ['error', { before: true, after: true}],
    },

}
