module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),
  rules: {

    'comma-dangle': [2, 'always-multiline'],

    'class-methods-use-this': [0],

    'arrow-body-style': ['error', 'always'],

    'arrow-parens': ['error', 'as-needed'],

    'no-param-reassign': ['error', { props: false }],

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    'max-len': ['error', 130],
  },
};
