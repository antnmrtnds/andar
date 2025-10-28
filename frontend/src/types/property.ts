export interface Property {
  id: string
  title: string
  description: string
  address: string
  city: string
  state: string
  postcode: string
  country: string
  price: number
  bedrooms: number
  bathrooms: number
  parking_spaces: number
  property_type: 'apartment' | 'house' | 'townhouse' | 'villa'
  status: 'off_the_plan' | 'under_construction' | 'completed'
  completion_date?: string
  images: string[]
  floor_plan?: string
  developer_id: string
  created_at: string
  updated_at: string
}

export interface Developer {
  id: string
  name: string
  description: string
  logo?: string
  website?: string
  email: string
  phone: string
  created_at: string
  updated_at: string
}

export interface Investment {
  id: string
  user_id: string
  property_id: string
  investment_amount: number
  investment_date: string
  status: 'pending' | 'approved' | 'rejected' | 'completed'
  notes?: string
  created_at: string
  updated_at: string
}

