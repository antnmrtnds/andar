import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Property, Developer, Investment } from '../../types'

// Mock data for frontend testing
export const mockProperty: Property = {
  id: '1',
  title: 'Luxury Apartment Complex',
  description: 'Modern apartment complex in the heart of the city',
  address: '123 Main Street',
  city: 'Sydney',
  state: 'NSW',
  postcode: '2000',
  country: 'Australia',
  price: 750000,
  bedrooms: 2,
  bathrooms: 2,
  parking_spaces: 1,
  property_type: 'apartment',
  status: 'off_the_plan',
  completion_date: '2025-12-31',
  images: ['image1.jpg', 'image2.jpg'],
  floor_plan: 'floorplan.pdf',
  land_size: 100,
  building_size: 80,
  developer_id: 'dev-1',
  is_featured: true,
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
}

export const mockDeveloper: Developer = {
  id: 'dev-1',
  name: 'Premium Developers',
  description: 'Leading property developer with 20+ years experience',
  logo: 'logo.png',
  website: 'https://premiumdev.com',
  email: 'info@premiumdev.com',
  phone: '+61 2 1234 5678',
  abn: '12345678901',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
}

export const mockInvestment: Investment = {
  id: 'inv-1',
  user_id: 'user-1',
  property_id: '1',
  investment_amount: 150000,
  investment_date: '2024-01-15',
  status: 'pending',
  notes: 'Initial investment deposit',
  created_at: '2024-01-15T00:00:00Z',
  updated_at: '2024-01-15T00:00:00Z',
}

// Test utilities
export const renderWithProviders = (ui: React.ReactElement) => {
  return render(ui)
}

export const mockApiResponse = (data: any) => ({
  data,
  status: 200,
  statusText: 'OK',
})

export const mockApiError = (message: string, status: number = 500) => ({
  response: {
    data: { error: message },
    status,
    statusText: 'Error',
  },
})

// Custom matchers
export const expectToBeInTheDocument = (text: string) => {
  expect(screen.getByText(text)).toBeInTheDocument()
}

export const expectNotToBeInTheDocument = (text: string) => {
  expect(screen.queryByText(text)).not.toBeInTheDocument()
}

// User event helpers
export const user = userEvent.setup()

// Mock functions
export const mockNavigate = jest.fn()
export const mockPush = jest.fn()
export const mockReplace = jest.fn()

// Mock Next.js router
export const mockRouter = {
  push: mockPush,
  replace: mockReplace,
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
  pathname: '/',
  query: {},
  asPath: '/',
}


