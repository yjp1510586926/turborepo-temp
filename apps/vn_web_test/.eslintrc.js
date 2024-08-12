module.exports = {
  extends: require.resolve('@umijs/max/eslint'),

  // 你可以在这里定义你的规则
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
};
