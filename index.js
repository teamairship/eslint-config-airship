module.exports = {
  extends: require.resolve('eslint-config-airbnb-base'),
  rules: {

    // http://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [2, 'always-multiline'],

    // http://eslint.org/docs/rules/class-methods-use-this
    'class-methods-use-this': [0],
  },
};
