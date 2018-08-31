module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),
  rules: {
    'arrow-body-style': ['error', 'as-needed'],

    'arrow-parens': ['error', 'as-needed'],

    camelcase: 0,

    'comma-dangle': ['error', 'never'],

    'class-methods-use-this': [0],

    'flowtype/no-types-missing-file-annotation': 0,

    'import/prefer-default-export': 'none',

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],

    'no-param-reassign': ['error', { props: false }],

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    'max-len': ['error', 130],

    'no-use-before-define': [
      'error',
      {
        variables: false
      }
    ],

    'react/jsx-uses-react': 'error',

    'react/jsx-uses-vars': 'error'
  }
};
