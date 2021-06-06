module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '../yugto-eslint-style.js',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {},
}
