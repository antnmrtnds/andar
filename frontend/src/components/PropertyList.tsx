import React from 'react'
import { Property } from '../types'

interface PropertyListProps {
  properties: Property[]
  onPropertyClick?: (propertyId: string) => void
  loading?: boolean
  error?: string
}

export const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  onPropertyClick,
  loading = false,
  error
}) => {
  if (loading) {
    return (
      <div className="property-list loading">
        <div className="loading-spinner">Loading properties...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="property-list error">
        <div className="error-message">
          <h3>Error loading properties</h3>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (properties.length === 0) {
    return (
      <div className="property-list empty">
        <div className="empty-message">
          <h3>No properties found</h3>
          <p>Try adjusting your search criteria.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="property-list">
      <div className="property-grid">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={onPropertyClick}
          />
        ))}
      </div>
    </div>
  )
}

// Import PropertyCard component
import { PropertyCard } from './PropertyCard'


