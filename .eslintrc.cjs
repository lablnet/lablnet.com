module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    parserOptions: {
      parser: 'babel-eslint',
      requireConfigFile: false,
      ecmaVersion: 8,  
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
      'no-unused-vars': 'off'
    }
  }