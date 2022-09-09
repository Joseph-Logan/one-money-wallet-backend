module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir : __dirname, 
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin','base-style-config'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:base-style-config/import-rules',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-shadow': 0,
    'default-case': 0,
    'no-console': 'warn',
    'prettier/prettier': 'error',
    "id-length": ["error", { "min": 2 }],
    "id-match": ["warn", "^[a-zA-Z]+([A-Z][a-z]+)*$"],
    "no-magic-numbers": ["error", { "ignoreDefaultValues": true , "ignoreArrayIndexes": true, "enforceConst": true}],
    "max-params": ["error", 2],
    "max-lines-per-function": ["warn", { "max": 20 }],
    "max-statements": ["warn", 20],
    "accessor-pairs": "error",
    "import/order": ["error", {"groups": ["builtin","external","internal","parent","sibling","index", "object", "type"],"alphabetize": {"order": "asc"},}],
    "no-inline-comments": "error",
    "multiline-comment-style": ["error", "starred-block"],
    'no-duplicate-imports': 'error',
  },
};