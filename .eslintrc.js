module.exports = {
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    // JS
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'no-console': 'error',
    'prefer-destructuring': ['error', {
      'AssignmentExpression': {
        'array': false,
      }
    }],
    
    // React Rules
    'jsx-quotes': ['error', 'prefer-single'],
    'react/button-has-type': ['error', { button: true, submit: true, reset: false }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
    'react/jsx-closing-bracket-location': [1, 'after-props'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['warn', 'never'],
    'react/jsx-indent': ['error', 2],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': ['error'],
    'react/no-find-dom-node': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-typos': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/void-dom-elements-no-children': 'warn',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-pascal-case': ['error', {
      allowAllCaps: true,
      ignore: [],
    }],
    'react/jsx-curly-newline': ['error', {
      multiline: 'consistent',
      singleline: 'consistent',
    }],
    'react/function-component-definition': ['off', {
      namedComponents: 'function-expression',
      unnamedComponents: 'function-expression',
    }],

    // Generally styling
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
    }],
    'array-bracket-spacing': ['error', 'always', { 'singleValue': false }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'space-in-parens': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', {
      'singleLine': {
        'beforeColon': false,
        'afterColon': true,
      },
      'multiLine': {
        'beforeColon': false,
        'afterColon': true,
        'align': 'colon',
      },
    }],
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never'],
  },
}
