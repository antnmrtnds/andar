import React from 'react'
import { Property } from '../types'

interface PropertySearchProps {
  onSearch: (filters: PropertySearchFilters) => void
  loading?: boolean
}

export interface PropertySearchFilters {
  city?: string
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  bathrooms?: number
  propertyType?: string
  status?: string
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  onSearch,
  loading = false
}) => {
  const [filters, setFilters] = React.useState<PropertySearchFilters>({})

  const handleInputChange = (field: keyof PropertySearchFilters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [field]: value || undefined
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(filters)
  }

  const handleReset = () => {
    setFilters({})
    onSearch({})
  }

  return (
    <div className="property-search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-row">
          <div className="search-field">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              placeholder="Enter city"
              value={filters.city || ''}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </div>

          <div className="search-field">
            <label htmlFor="propertyType">Property Type</label>
            <select
              id="propertyType"
              value={filters.propertyType || ''}
              onChange={(e) => handleInputChange('propertyType', e.target.value)}
            >
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="townhouse">Townhouse</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={filters.status || ''}
              onChange={(e) => handleInputChange('status', e.target.value)}
            >
              <option value="">All Status</option>
              <option value="off_the_plan">Off The Plan</option>
              <option value="under_construction">Under Construction</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>

        <div className="search-row">
          <div className="search-field">
            <label htmlFor="minPrice">Min Price</label>
            <input
              id="minPrice"
              type="number"
              placeholder="Min price"
              value={filters.minPrice || ''}
              onChange={(e) => handleInputChange('minPrice', parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="search-field">
            <label htmlFor="maxPrice">Max Price</label>
            <input
              id="maxPrice"
              type="number"
              placeholder="Max price"
              value={filters.maxPrice || ''}
              onChange={(e) => handleInputChange('maxPrice', parseInt(e.target.value) || 0)}
            />
          </div>

          <div className="search-field">
            <label htmlFor="bedrooms">Bedrooms</label>
            <select
              id="bedrooms"
              value={filters.bedrooms || ''}
              onChange={(e) => handleInputChange('bedrooms', parseInt(e.target.value) || 0)}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          <div className="search-field">
            <label htmlFor="bathrooms">Bathrooms</label>
            <select
              id="bathrooms"
              value={filters.bathrooms || ''}
              onChange={(e) => handleInputChange('bathrooms', parseInt(e.target.value) || 0)}
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>
        </div>

        <div className="search-actions">
          <button type="submit" disabled={loading} className="search-button">
            {loading ? 'Searching...' : 'Search Properties'}
          </button>
          <button type="button" onClick={handleReset} className="reset-button">
            Reset Filters
          </button>
        </div>
      </form>
    </div>
  )
}

