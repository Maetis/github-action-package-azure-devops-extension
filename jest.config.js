module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  testRunner: 'jest',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}
