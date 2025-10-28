'use client'

import React, { useState } from 'react'
import { Property } from '../types/property'
import { PropertyCard } from './PropertyCard'
import styles from './PropertyList.module.css'

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
  const [showAll, setShowAll] = useState(false)
  const displayProperties = showAll ? properties : properties.slice(0, 6)

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading properties...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h3>Error loading properties</h3>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (properties.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>
          <h3>No properties found</h3>
          <p>Try adjusting your search criteria.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {displayProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onClick={onPropertyClick}
          />
        ))}
      </div>
      {properties.length > 6 && !showAll && (
        <button 
          className={styles.loadMoreButton}
          onClick={() => setShowAll(true)}
        >
          Ver mais destaques
        </button>
      )}
    </div>
  )
}

