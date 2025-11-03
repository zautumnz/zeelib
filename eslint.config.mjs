import love from 'eslint-config-love'

const rulesOverrides = {
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/no-empty-function': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-redundant-type-constituents': 'off',
  '@typescript-eslint/no-unnecessary-condition': 'off',
  '@typescript-eslint/no-unnecessary-type-parameters': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/no-unsafe-type-assertion': 'off',
  '@typescript-eslint/prefer-destructuring': 'off',
  '@typescript-eslint/prefer-for-of': 'off',
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
  'array-bracket-spacing': [ 'error', 'always' ],
  'comma-dangle': 'off',
  'consistent-this': 'off',
  'eslint-comments/require-description': 'off',
  'no-console': 'off',
  'no-negated-condition': 'off',
  'no-param-reassign': 'off',
  'no-plusplus': 'off',
  'promise/avoid-new': 'off',
}

love.rules = { ...love.rules, ...rulesOverrides }

export default {
  ...love,
  files: ['src/*.ts'],
}
