module.exports = {
  roots: ['<rootDir>/test'],
  testMatch: [
    '**/__test__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/{!(b-tree),}.ts'],
};
