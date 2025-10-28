# Testing Guide

This document explains how to run tests for the Real Estate Investment Platform.

## Test Setup

The project uses different testing frameworks for frontend and backend:

### Frontend Testing
- **Jest** - Test runner and assertion library
- **React Testing Library** - Component testing utilities
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/jest-dom** - Custom Jest matchers

### Backend Testing
- **Jest** - Test runner and assertion library
- **Supertest** - HTTP assertion library for API testing
- **ts-jest** - TypeScript support for Jest

## Running Tests

### Run All Tests
```bash
npm run test
```

### Run Frontend Tests Only
```bash
npm run test:frontend
```

### Run Backend Tests Only
```bash
npm run test:backend
```

### Watch Mode (Re-run tests on file changes)
```bash
npm run test:watch
```

### Coverage Reports
```bash
npm run test:coverage
```

## Test Structure

### Frontend Tests
```
frontend/src/__tests__/
├── components/          # Component tests
│   └── PropertyCard.test.tsx
├── pages/              # Page tests
│   └── Home.test.tsx
└── utils/              # Test utilities
    └── testUtils.tsx
```

### Backend Tests
```
backend/src/__tests__/
├── controllers/         # Controller tests
│   └── propertyController.test.ts
├── routes/             # Route tests
│   └── propertyRoutes.test.ts
└── utils/             # Test utilities
    └── testUtils.ts
```

## Writing Tests

### Frontend Component Test Example
```typescript
import { render, screen } from '@testing-library/react'
import { PropertyCard } from '../PropertyCard'
import { mockProperty, renderWithProviders } from '../utils/testUtils'

describe('PropertyCard', () => {
  it('renders property information', () => {
    renderWithProviders(<PropertyCard property={mockProperty} />)
    
    expect(screen.getByText(mockProperty.title)).toBeInTheDocument()
    expect(screen.getByText(`$${mockProperty.price.toLocaleString()}`)).toBeInTheDocument()
  })
})
```

### Backend Controller Test Example
```typescript
import { PropertyController } from '../../controllers/propertyController'
import { createMockRequest, createMockResponse } from '../utils/testUtils'

describe('PropertyController', () => {
  it('should return all properties', async () => {
    const req = createMockRequest()
    const res = createMockResponse()
    
    await PropertyController.getAllProperties(req, res)
    
    expect(res.json).toHaveBeenCalledWith({
      data: expect.any(Array),
      count: expect.any(Number)
    })
  })
})
```

### Backend API Test Example
```typescript
import request from 'supertest'
import app from '../../server'

describe('Property API', () => {
  it('should return properties', async () => {
    const response = await request(app)
      .get('/api/properties')
      .expect(200)
    
    expect(response.body).toHaveProperty('data')
    expect(response.body).toHaveProperty('count')
  })
})
```

## Test Utilities

### Frontend Test Utils
- `renderWithProviders` - Renders components with providers
- `mockProperty`, `mockDeveloper`, `mockInvestment` - Mock data
- `user` - User event simulation
- `expectToBeInTheDocument` - Custom assertions

### Backend Test Utils
- `createMockRequest` - Creates mock Express request
- `createMockResponse` - Creates mock Express response
- `createMockSupabaseResponse` - Creates mock Supabase response
- Mock data objects for testing

## Mocking

### Frontend Mocks
- Next.js router and navigation
- Supabase client
- Axios HTTP client
- Global fetch API

### Backend Mocks
- Supabase client
- Environment variables
- Database responses

## Coverage

Test coverage reports are generated in the `coverage/` directory:
- **Text** - Console output
- **LCOV** - For CI/CD integration
- **HTML** - Browser-viewable report

## Best Practices

### Frontend Testing
1. Test user interactions, not implementation details
2. Use semantic queries (`getByRole`, `getByLabelText`)
3. Test accessibility features
4. Mock external dependencies
5. Test error states and loading states

### Backend Testing
1. Test both success and error scenarios
2. Mock database calls
3. Test input validation
4. Test authentication and authorization
5. Use descriptive test names

### General
1. Keep tests simple and focused
2. Use descriptive test names
3. Arrange-Act-Assert pattern
4. Mock external dependencies
5. Test edge cases and error conditions

## Continuous Integration

Tests are configured to run in CI/CD pipelines:
- Frontend tests run on every PR
- Backend tests run on every PR
- Coverage thresholds can be set
- Failed tests block deployment

## Debugging Tests

### Frontend
```bash
# Run specific test file
npm run test:frontend -- PropertyCard.test.tsx

# Run tests matching pattern
npm run test:frontend -- --testNamePattern="renders property"

# Debug mode
npm run test:frontend -- --detectOpenHandles --forceExit
```

### Backend
```bash
# Run specific test file
npm run test:backend -- propertyController.test.ts

# Run tests matching pattern
npm run test:backend -- --testNamePattern="should return all properties"

# Debug mode
npm run test:backend -- --detectOpenHandles --forceExit
```

## Troubleshooting

### Common Issues

1. **Tests timing out**
   - Increase timeout in `jest.setup.ts`
   - Check for unclosed handles

2. **Mock not working**
   - Ensure mocks are defined before imports
   - Check mock implementation

3. **TypeScript errors**
   - Ensure proper type definitions
   - Check `tsconfig.json` configuration

4. **Coverage not accurate**
   - Check `collectCoverageFrom` patterns
   - Exclude test files from coverage

### Getting Help

- Check Jest documentation: https://jestjs.io/docs/getting-started
- React Testing Library docs: https://testing-library.com/docs/react-testing-library/intro/
- Supertest docs: https://github.com/visionmedia/supertest


