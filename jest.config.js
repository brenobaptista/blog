const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/coverage/',
    '<rootDir>/src/components/svgs/index.tsx',
    '<rootDir>/src/pages/_app.tsx',
    '<rootDir>/src/pages/_document.tsx',
    '<rootDir>/src/styles',
    '<rootDir>/testUtils.tsx'
  ]
}

module.exports = createJestConfig(customJestConfig)
