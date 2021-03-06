module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommend',
    'plugin:@typescript-eslint/recomended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint', 'prettier', 'import',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-console':'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        groups:[
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ]
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
