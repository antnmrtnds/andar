import { render, screen } from '@testing-library/react'
import Home from '../../app/page'
import {
  mockProperty,
  renderWithProviders,
  expectToBeInTheDocument,
} from '../utils/testUtils'

// Mock Next.js components
jest.mock('next/image', () => {
  return function MockImage({ alt, ...props }: any) {
    return <img alt={alt} {...props} />
  }
})

describe('Home Page', () => {
  it('renders the main heading', () => {
    renderWithProviders(<Home />)
    
    expectToBeInTheDocument('Real Estate Investment Platform')
  })

  it('renders the welcome message', () => {
    renderWithProviders(<Home />)
    
    expectToBeInTheDocument('Welcome to the Real Estate Investment Platform')
  })

  it('has proper page structure', () => {
    renderWithProviders(<Home />)
    
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Real Estate Investment Platform')
  })
})


