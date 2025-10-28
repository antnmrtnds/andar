import React from 'react'
import { Property } from '../types'

interface PropertyCardProps {
  property: Property
  onClick?: (propertyId: string) => void
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property, 
  onClick 
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(property.id)
    }
  }

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString()}`
  }

  const formatStatus = (status: string) => {
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
  }

  return (
    <div 
      className="property-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
    >
      {property.is_featured && (
        <div className="featured-badge">Featured</div>
      )}
      
      <div className="property-image">
        {property.images && property.images.length > 0 && (
          <img 
            src={property.images[0]} 
            alt={property.title}
            loading="lazy"
          />
        )}
      </div>
      
      <div className="property-content">
        <div className="property-header">
          <h3 className="property-title">{property.title}</h3>
          <span className="property-status">{formatStatus(property.status)}</span>
        </div>
        
        <p className="property-description">{property.description}</p>
        
        <div className="property-location">
          <span>{property.address}, {property.city}, {property.state} {property.postcode}</span>
        </div>
        
        <div className="property-features">
          <span>{property.bedrooms} bed</span>
          <span>{property.bathrooms} bath</span>
          <span>{property.parking_spaces} parking</span>
        </div>
        
        <div className="property-price">
          {formatPrice(property.price)}
        </div>
        
        {property.completion_date && (
          <div className="completion-date">
            Expected completion: {new Date(property.completion_date).toLocaleDateString()}
          </div>
        )}
      </div>
    </div>
  )
}

