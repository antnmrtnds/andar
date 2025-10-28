import { Request, Response } from 'express'
import { PropertyController } from '../../controllers/propertyController'
import { supabase } from '../../config/supabase'
import {
  mockProperty,
  mockProperties,
  createMockRequest,
  createMockResponse,
  createMockSupabaseResponse,
} from '../utils/testUtils'

// Mock Supabase
jest.mock('../../config/supabase', () => ({
  supabase: {
    from: jest.fn(),
  },
}))

describe('PropertyController', () => {
  let mockSupabase: any

  beforeEach(() => {
    mockSupabase = {
      from: jest.fn(() => ({
        select: jest.fn().mockReturnThis(),
        insert: jest.fn().mockReturnThis(),
        update: jest.fn().mockReturnThis(),
        delete: jest.fn().mockReturnThis(),
        eq: jest.fn().mockReturnThis(),
        single: jest.fn(),
        order: jest.fn().mockReturnThis(),
      })),
    }
    ;(supabase as any) = mockSupabase
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getAllProperties', () => {
    it('should return all properties successfully', async () => {
      const req = createMockRequest()
      const res = createMockResponse()

      mockSupabase.from().select().order().mockResolvedValue(
        createMockSupabaseResponse(mockProperties)
      )

      await PropertyController.getAllProperties(req, res)

      expect(res.json).toHaveBeenCalledWith({
        data: mockProperties,
        count: mockProperties.length,
      })
    })

    it('should handle database errors', async () => {
      const req = createMockRequest()
      const res = createMockResponse()
      const error = new Error('Database connection failed')

      mockSupabase.from().select().order().mockResolvedValue(
        createMockSupabaseResponse(null, error)
      )

      await PropertyController.getAllProperties(req, res)

      expect(res.status).toHaveBeenCalledWith(500)
      expect(res.json).toHaveBeenCalledWith({
        error: 'Database connection failed',
      })
    })
  })

  describe('getPropertyById', () => {
    it('should return a single property by ID', async () => {
      const req = createMockRequest({ params: { id: '1' } })
      const res = createMockResponse()

      mockSupabase.from().select().eq().single().mockResolvedValue(
        createMockSupabaseResponse(mockProperty)
      )

      await PropertyController.getPropertyById(req, res)

      expect(res.json).toHaveBeenCalledWith({ data: mockProperty })
    })

    it('should return 404 for non-existent property', async () => {
      const req = createMockRequest({ params: { id: '999' } })
      const res = createMockResponse()
      const error = new Error('Property not found')

      mockSupabase.from().select().eq().single().mockResolvedValue(
        createMockSupabaseResponse(null, error)
      )

      await PropertyController.getPropertyById(req, res)

      expect(res.status).toHaveBeenCalledWith(404)
      expect(res.json).toHaveBeenCalledWith({
        error: 'Property not found',
      })
    })
  })

  describe('createProperty', () => {
    it('should create a new property successfully', async () => {
      const newProperty = { ...mockProperty, id: undefined }
      const req = createMockRequest({ body: newProperty })
      const res = createMockResponse()

      mockSupabase.from().insert().select().single().mockResolvedValue(
        createMockSupabaseResponse(mockProperty)
      )

      await PropertyController.createProperty(req, res)

      expect(res.status).toHaveBeenCalledWith(201)
      expect(res.json).toHaveBeenCalledWith({ data: mockProperty })
    })

    it('should handle validation errors', async () => {
      const invalidProperty = { title: '' } // Missing required fields
      const req = createMockRequest({ body: invalidProperty })
      const res = createMockResponse()
      const error = new Error('Validation failed')

      mockSupabase.from().insert().select().single().mockResolvedValue(
        createMockSupabaseResponse(null, error)
      )

      await PropertyController.createProperty(req, res)

      expect(res.status).toHaveBeenCalledWith(400)
      expect(res.json).toHaveBeenCalledWith({
        error: 'Validation failed',
      })
    })
  })

  describe('updateProperty', () => {
    it('should update a property successfully', async () => {
      const updates = { title: 'Updated Title' }
      const req = createMockRequest({ 
        params: { id: '1' }, 
        body: updates 
      })
      const res = createMockResponse()
      const updatedProperty = { ...mockProperty, ...updates }

      mockSupabase.from().update().eq().select().single().mockResolvedValue(
        createMockSupabaseResponse(updatedProperty)
      )

      await PropertyController.updateProperty(req, res)

      expect(res.json).toHaveBeenCalledWith({ data: updatedProperty })
    })
  })

  describe('deleteProperty', () => {
    it('should delete a property successfully', async () => {
      const req = createMockRequest({ params: { id: '1' } })
      const res = createMockResponse()

      mockSupabase.from().delete().eq().mockResolvedValue(
        createMockSupabaseResponse(null)
      )

      await PropertyController.deleteProperty(req, res)

      expect(res.json).toHaveBeenCalledWith({
        message: 'Property deleted successfully',
      })
    })
  })

  describe('getPropertiesByStatus', () => {
    it('should return properties filtered by status', async () => {
      const req = createMockRequest({ params: { status: 'off_the_plan' } })
      const res = createMockResponse()
      const filteredProperties = mockProperties.filter(
        p => p.status === 'off_the_plan'
      )

      mockSupabase.from().select().eq().order().mockResolvedValue(
        createMockSupabaseResponse(filteredProperties)
      )

      await PropertyController.getPropertiesByStatus(req, res)

      expect(res.json).toHaveBeenCalledWith({
        data: filteredProperties,
        count: filteredProperties.length,
      })
    })
  })
})


