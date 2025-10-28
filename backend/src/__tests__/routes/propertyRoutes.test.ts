import request from 'supertest'
import app from '../../server'
import { supabase } from '../../config/supabase'
import {
  mockProperty,
  mockProperties,
  createMockSupabaseResponse,
} from '../utils/testUtils'

// Mock Supabase
jest.mock('../../config/supabase', () => ({
  supabase: {
    from: jest.fn(),
    auth: {
      getUser: jest.fn(),
    },
  },
}))

describe('Property API Routes', () => {
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
      auth: {
        getUser: jest.fn(),
      },
    }
    ;(supabase as any) = mockSupabase
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('GET /api/properties', () => {
    it('should return all properties', async () => {
      mockSupabase.from().select().order().mockResolvedValue(
        createMockSupabaseResponse(mockProperties)
      )

      const response = await request(app)
        .get('/api/properties')
        .expect(200)

      expect(response.body).toEqual({
        data: mockProperties,
        count: mockProperties.length,
      })
    })

    it('should handle server errors', async () => {
      mockSupabase.from().select().order().mockResolvedValue(
        createMockSupabaseResponse(null, new Error('Database error'))
      )

      await request(app)
        .get('/api/properties')
        .expect(500)
    })
  })

  describe('GET /api/properties/:id', () => {
    it('should return a specific property', async () => {
      mockSupabase.from().select().eq().single().mockResolvedValue(
        createMockSupabaseResponse(mockProperty)
      )

      const response = await request(app)
        .get('/api/properties/1')
        .expect(200)

      expect(response.body).toEqual({ data: mockProperty })
    })

    it('should return 404 for non-existent property', async () => {
      mockSupabase.from().select().eq().single().mockResolvedValue(
        createMockSupabaseResponse(null, new Error('Property not found'))
      )

      await request(app)
        .get('/api/properties/999')
        .expect(404)
    })
  })

  describe('POST /api/properties', () => {
    it('should create a new property', async () => {
      const newProperty = { ...mockProperty, id: undefined }
      
      mockSupabase.from().insert().select().single().mockResolvedValue(
        createMockSupabaseResponse(mockProperty)
      )

      const response = await request(app)
        .post('/api/properties')
        .send(newProperty)
        .expect(201)

      expect(response.body).toEqual({ data: mockProperty })
    })

    it('should handle validation errors', async () => {
      const invalidProperty = { title: '' }

      mockSupabase.from().insert().select().single().mockResolvedValue(
        createMockSupabaseResponse(null, new Error('Validation failed'))
      )

      await request(app)
        .post('/api/properties')
        .send(invalidProperty)
        .expect(400)
    })
  })

  describe('PUT /api/properties/:id', () => {
    it('should update a property', async () => {
      const updates = { title: 'Updated Title' }
      const updatedProperty = { ...mockProperty, ...updates }

      mockSupabase.from().update().eq().select().single().mockResolvedValue(
        createMockSupabaseResponse(updatedProperty)
      )

      const response = await request(app)
        .put('/api/properties/1')
        .send(updates)
        .expect(200)

      expect(response.body).toEqual({ data: updatedProperty })
    })
  })

  describe('DELETE /api/properties/:id', () => {
    it('should delete a property', async () => {
      mockSupabase.from().delete().eq().mockResolvedValue(
        createMockSupabaseResponse(null)
      )

      const response = await request(app)
        .delete('/api/properties/1')
        .expect(200)

      expect(response.body).toEqual({
        message: 'Property deleted successfully',
      })
    })
  })

  describe('GET /api/properties/status/:status', () => {
    it('should return properties by status', async () => {
      const filteredProperties = mockProperties.filter(
        p => p.status === 'off_the_plan'
      )

      mockSupabase.from().select().eq().order().mockResolvedValue(
        createMockSupabaseResponse(filteredProperties)
      )

      const response = await request(app)
        .get('/api/properties/status/off_the_plan')
        .expect(200)

      expect(response.body).toEqual({
        data: filteredProperties,
        count: filteredProperties.length,
      })
    })
  })

  describe('Health Check', () => {
    it('should return health status', async () => {
      const response = await request(app)
        .get('/health')
        .expect(200)

      expect(response.body).toHaveProperty('status', 'OK')
      expect(response.body).toHaveProperty('timestamp')
    })
  })
})


