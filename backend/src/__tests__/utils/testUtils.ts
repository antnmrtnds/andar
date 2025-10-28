import { Property, Developer, Investment } from '../types'

// Mock data for testing
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

export const mockProperties: Property[] = [
  mockProperty,
  {
    ...mockProperty,
    id: '2',
    title: 'Waterfront Villa',
    city: 'Melbourne',
    price: 1200000,
    property_type: 'villa',
    status: 'under_construction',
  },
]

export const mockDevelopers: Developer[] = [
  mockDeveloper,
  {
    ...mockDeveloper,
    id: 'dev-2',
    name: 'Urban Builders',
    email: 'contact@urbanbuilders.com',
  },
]

export const mockInvestments: Investment[] = [
  mockInvestment,
  {
    ...mockInvestment,
    id: 'inv-2',
    property_id: '2',
    investment_amount: 200000,
    status: 'approved',
  },
]

// Test utilities
export const createMockSupabaseResponse = (data: any, error: any = null) => ({
  data,
  error,
})

export const createMockRequest = (overrides: any = {}) => ({
  params: {},
  body: {},
  query: {},
  headers: {},
  ...overrides,
})

export const createMockResponse = () => {
  const res: any = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.send = jest.fn().mockReturnValue(res)
  return res
}

export const createMockNext = () => jest.fn()


