module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),
  rules: {
    'comma-dangle': ['error', 'never'],

    'class-methods-use-this': [0],

    'arrow-body-style': ['error', 'always'],

    'arrow-parens': ['error', 'as-needed'],

    'no-param-reassign': ['error', { props: false }],

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    'max-len': ['error', 130],

    'no-use-before-define': [
      'error',
      {
        variables: false
      }
    ],

    'arrow-body-style': ['error', 'as-needed']
  }
};
