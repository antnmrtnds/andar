import { PropertyCard } from '@/components/PropertyCard'
import { Property } from '@/types/property'
import styles from './page.module.css'

// Mock property data for testing
const mockProperty: Property = {
  id: '1',
  title: 'Aurora by Vizta',
  description: 'Modern apartment complex in Leça da Palmeira',
  address: 'Rua da Aurora',
  city: 'Leça da Palmeira',
  state: 'Porto',
  postcode: '4450-001',
  country: 'Portugal',
  price: 250000,
  bedrooms: 2,
  bathrooms: 1,
  parking_spaces: 1,
  property_type: 'apartment',
  status: 'off_the_plan',
  completion_date: '2025-12-31',
  images: [
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
  ],
  developer_id: 'dev-1',
  created_at: '2024-01-01',
  updated_at: '2024-01-01',
}

export default function TestPropertyPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Property Card Preview</h1>
      <div className={styles.cardWrapper}>
        <PropertyCard property={mockProperty} />
      </div>
    </div>
  )
}

