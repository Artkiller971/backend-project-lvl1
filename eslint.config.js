import globals from 'globals';
import stylisticJs from '@stylistic/eslint-plugin-js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: { globals: globals.node, },
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      semi: 'error',
      'prefer-const': 'error',
      '@stylistic/js/indent': ['error', 2,],
      '@stylistic/js/quotes': ['error', 'single',],
      '@stylistic/js/comma-dangle': ['error',  {
        'arrays': 'always',
        'objects': 'always',
        'imports': 'always',
        'exports': 'always',
        'functions': 'always',
        'importAttributes': 'always',
        'dynamicImports': 'always',
      },],
      '@stylistic/js/no-multiple-empty-lines': ['error', { 'max': 1, },],
      '@stylistic/js/no-trailing-spaces': ['error',],

    },
  },

];