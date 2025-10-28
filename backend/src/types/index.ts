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
  land_size?: number
  building_size?: number
  developer_id: string
  is_featured: boolean
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
  abn?: string
  created_at: string
  updated_at: string
}

export interface Investment {
  id: string
  user_id: string
  property_id: string
  investment_amount: number
  investment_date: string
  status: 'pending' | 'approved' | 'rejected' | 'completed' | 'cancelled'
  notes?: string
  created_at: string
  updated_at: string
}

export interface User {
  id: string
  email: string
  full_name?: string
  phone?: string
  avatar_url?: string
  role: 'investor' | 'developer' | 'admin'
  created_at: string
  updated_at: string
}

export interface Favorite {
  id: string
  user_id: string
  property_id: string
  created_at: string
}

export interface Inquiry {
  id: string
  user_id: string
  property_id: string
  message: string
  email: string
  phone?: string
  status: 'new' | 'in_progress' | 'responded' | 'closed'
  created_at: string
  updated_at: string
}

export interface PropertyFeature {
  id: string
  property_id: string
  feature_name: string
  feature_value?: string
  created_at: string
}

