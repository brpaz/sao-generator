module.exports = {
  extends: ['plugin:prettier/recommended'],
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
};
