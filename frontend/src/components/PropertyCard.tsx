'use client'

import React from 'react'
import { BedDouble, Bath, CarFront, LampDesk, Camera } from 'lucide-react'
import { Property } from '../types/property'
import styles from './PropertyCard.module.css'

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
    return `Desde €${price.toLocaleString()}`
  }

  const formatBedrooms = () => {
    return property.bedrooms.toString()
  }

  const formatBathrooms = () => {
    return property.bathrooms.toString()
  }

  const formatParking = () => {
    return property.parking_spaces.toString()
  }

  const formatOffice = () => {
    // Mock data for office spaces, adjust based on your actual property data
    return '0'
  }

  const getPhotoCount = () => {
    return property.images ? property.images.length : 0
  }

  return (
    <div 
      className={styles.card}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick()
        }
      }}
    >
      {/* Image Container */}
      <div className={styles.imageContainer}>
        <div className={styles.image}>
          {property.images && property.images.length > 0 ? (
            <img 
              src={property.images[0]} 
              alt={property.title}
            />
          ) : (
            <div className={styles.placeholderImage} />
          )}
        </div>
        
        {/* Photo Counter Badge */}
        <div className={styles.icon} style={{ display: getPhotoCount() > 1 ? 'flex' : 'none' }}>
          <div className={styles.iconContent}>
            <div className={styles.iconImage}>
              <Camera size={16} color="white" />
            </div>
          </div>
          <p className={styles.counterText}>{getPhotoCount()}</p>
        </div>
      </div>

      {/* Caption Section */}
      <div className={styles.caption}>
        <div className={styles.captionContent}>
          <p className={styles.title}>{property.title}</p>
        </div>
        
        <p className={styles.location}>
          {property.city}{property.state && `, ${property.state}`}
        </p>
        
        {/* Features Info */}
        <div className={styles.info}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <BedDouble size={16} color="#898989" />
            </div>
            <p className={styles.featureText}>{formatBedrooms()}</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <Bath size={16} color="#898989" />
            </div>
            <p className={styles.featureText}>{formatBathrooms()}</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <CarFront size={16} color="#898989" />
            </div>
            <p className={styles.featureText}>{formatParking()}</p>
          </div>
          
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <LampDesk size={16} color="#898989" />
            </div>
            <p className={styles.featureText}>{formatOffice()}</p>
          </div>
        </div>
        
        <p className={styles.price}>
          {formatPrice(property.price)}
        </p>
      </div>
    </div>
  )
}

