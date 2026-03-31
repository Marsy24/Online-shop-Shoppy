import pluginJs from '@eslint/js'
import globals from 'globals'
import prettierConfig from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/coverage/**",
      "**/*.log",
      "**/npm-debug.log*",
      "**/.git/**",
      "**/.idea/**",
      "**/.vscode/**",
      "**/.DS_Store",
  ] },
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.worker,
        // Specific
        IntersectionObserver: 'readonly',
        ResizeObserver: 'readonly',
        MutationObserver: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        // Modern API
        fetch: 'readonly',
        AbortController: 'readonly',
        requestAnimationFrame: 'readonly',
        cancelAnimationFrame: 'readonly',
        // Forms
        FormData: 'readonly',
        // Drag & Drop
        DragEvent: 'readonly',
        DataTransfer: 'readonly',
        // Media
        AudioContext: 'readonly',
        MediaDevices: 'readonly',
        // Clipboard
        ClipboardEvent: 'readonly',
        ClipboardItem: 'readonly',
        // History of browser
        history: 'readonly',
        navigator: 'readonly',
        screen: 'readonly',
      },
    } 
  },
  pluginJs.configs.recommended,
  {
    rules: {
      // Variables and style
      'no-var': 'error',
      'no-console': 'warn',
      'no-unused-vars': 'error',
      'eqeqeq': ['error', 'always', {'null': 'ignore'}],
      'curly': ['error', 'all'],
      'no-else-return': 'error',
      'no-duplicate-imports': 'error',

      // Security and quality
      'no-implicit-globals': 'error',
      'no-shadow': 'error',
      'no-param-reassign': ['error', { props: true }],
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-useless-return': 'error',

      // DOM and browser
      'no-alert': 'warn',
      'no-implied-eval': 'error',
      'no-script-url': 'error',
      'require-await': 'warn',
      'no-return-await': 'error',

      // Clearly code
      'camelcase': ['error', { properties: 'never' }],
      'consistent-return': 'error',
      'default-case': 'error',
      'default-param-last': 'error',
      'func-style': ['warn', 'declaration'],
      'new-cap': ['error', { newIsCap: true }],

      // Performance and optimization
      'no-magic-numbers': ['warn', { ignore: [-1, 0, 1, 100, 1000] }],
      'prefer-template': 'error',
      'prefer-const': 'error',
      'prefer-destructuring': ['error', { array: false, object: true }],
      'no-array-constructor': 'error',
      'no-new-object': 'error',
      'no-new-func': 'error',

      // Style and readability
      'arrow-body-style': ['warn', 'as-needed'],
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',

      // Modern JS
      'object-shorthand': ['error', 'always'],
      'prefer-arrow-callback': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',

      // Best practices for layout/interactivity
      'no-empty-function': ['error', { allow: ['arrowFunctions'] }],
      'no-useless-constructor': 'error',
      'class-methods-use-this': ['warn', { exceptMethods: ['render', 'init'] }],

      // Code formatting
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'function', next: 'function' },
        { blankLine: 'always', prev: 'export', next: 'export' }
      ],
    },
  },
  prettierConfig,
]
