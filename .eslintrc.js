module.exports = {
  env: {
    es2020: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: ['prettier'],
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/no-unused-vars': ['error']
  }
}
