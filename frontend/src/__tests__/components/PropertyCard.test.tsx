import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { PropertyCard } from '../../components/PropertyCard'
import {
  mockProperty,
  renderWithProviders,
  user,
} from '../utils/testUtils'

// Mock Next.js components
jest.mock('next/image', () => {
  return function MockImage({ alt, ...props }: any) {
    return <img alt={alt} {...props} />
  }
})

describe('PropertyCard Component', () => {
  it('renders property information correctly', () => {
    renderWithProviders(<PropertyCard property={mockProperty} />)
    
    expect(screen.getByText(mockProperty.title)).toBeInTheDocument()
    expect(screen.getByText(mockProperty.description)).toBeInTheDocument()
    expect(screen.getByText(mockProperty.address)).toBeInTheDocument()
    expect(screen.getByText(`$${mockProperty.price.toLocaleString()}`)).toBeInTheDocument()
  })

  it('displays property features', () => {
    renderWithProviders(<PropertyCard property={mockProperty} />)
    
    expect(screen.getByText(`${mockProperty.bedrooms} bed`)).toBeInTheDocument()
    expect(screen.getByText(`${mockProperty.bathrooms} bath`)).toBeInTheDocument()
    expect(screen.getByText(`${mockProperty.parking_spaces} parking`)).toBeInTheDocument()
  })

  it('shows property status badge', () => {
    renderWithProviders(<PropertyCard property={mockProperty} />)
    
    expect(screen.getByText('Off The Plan')).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const mockOnClick = jest.fn()
    renderWithProviders(
      <PropertyCard property={mockProperty} onClick={mockOnClick} />
    )
    
    const card = screen.getByRole('button')
    await user.click(card)
    
    expect(mockOnClick).toHaveBeenCalledWith(mockProperty.id)
  })

  it('displays featured badge for featured properties', () => {
    renderWithProviders(<PropertyCard property={mockProperty} />)
    
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('does not display featured badge for non-featured properties', () => {
    const nonFeaturedProperty = { ...mockProperty, is_featured: false }
    renderWithProviders(<PropertyCard property={nonFeaturedProperty} />)
    
    expect(screen.queryByText('Featured')).not.toBeInTheDocument()
  })
})


