module.exports = {
  preset: 'react-native',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?|rtn-weightedrandnum)/)',
  ],
  globals: {
    __DEV__: true,
  },
};
