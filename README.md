# Create Playwright Boilerplate

A CLI tool to quickly scaffold Playwright E2E testing projects with best practices and a well-organized structure.

## Features

- 🚀 Interactive project creation
- 📁 Well-organized test structure
- 🎯 Pre-configured Playwright setup
- 🧰 Utility functions and fixtures
- 🔧 Multiple template support (React, Vue, Vanilla)
- ✨ Best practices out of the box

## Installation

You can use this CLI tool in two ways:

### 1. Using npx (Recommended)

```bash
npx hot-platwight-typescript create my-project
```

### 2. Global Installation

```bash
npm install -g hot-platwight-typescript
hot-platwight-typescript create my-project
```

## Usage

### Basic Usage

Create a new project with default settings (React template):

```bash
npx hot-platwight-typescript create my-project
```

### Template Selection

Choose a specific template:

```bash
npx hot-platwight-typescript create my-project --template react
npx hot-platwight-typescript create my-project --template vue
npx hot-platwight-typescript create my-project --template vanilla
```

## Project Structure

```
my-project/
├── tests/
│   └── e2e/
│       ├── specs/
│       │   ├── auth/
│       │   │   └── login.spec.ts
│       │   └── home/
│       │       └── home.spec.ts
│       ├── utils/
│       │   ├── page-utils.ts
│       │   └── form-utils.ts
│       └── fixtures/
│           ├── routes.ts
│           └── user-data.ts
├── playwright.config.ts
└── package.json
```

## Available Scripts

After creating your project, you can run:

```bash
# Install dependencies
npm install

# Run tests
npm run test:e2e

# Run tests with UI
npm run test:e2e:ui

# Debug tests
npm run test:e2e:debug
```

## Test Organization

### Specs
- Tests are organized by feature in the `specs` directory
- Each feature has its own directory (e.g., `auth`, `home`)
- Test files use the `.spec.ts` extension

### Utils
- Reusable test utilities in the `utils` directory
- `page-utils.ts`: Common page operations
- `form-utils.ts`: Form interaction helpers

### Fixtures
- Test data and configurations in the `fixtures` directory
- `routes.ts`: Application routes
- `user-data.ts`: Test user data

## Best Practices

1. **Test Organization**
   - Keep tests small and focused
   - One test file per feature
   - Clear test descriptions

2. **Page Objects**
   - Use utility functions for common operations
   - Keep selectors maintainable
   - Abstract complex interactions

3. **Test Data**
   - Use fixtures for test data
   - Keep test data separate from test logic
   - Use meaningful test data

4. **Configuration**
   - Customize Playwright config as needed
   - Set appropriate timeouts and retries
   - Configure CI/CD settings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT