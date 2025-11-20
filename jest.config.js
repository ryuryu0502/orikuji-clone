const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Next.js アプリへのパス
    dir: './',
})

// Jest のカスタム設定
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
}

module.exports = createJestConfig(customJestConfig)
