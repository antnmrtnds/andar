import { Router } from 'express'
import { PropertyController } from '../controllers/propertyController'

const router = Router()

// GET /api/properties - Get all properties
router.get('/', PropertyController.getAllProperties)

// GET /api/properties/:id - Get property by ID
router.get('/:id', PropertyController.getPropertyById)

// POST /api/properties - Create new property
router.post('/', PropertyController.createProperty)

// PUT /api/properties/:id - Update property
router.put('/:id', PropertyController.updateProperty)

// DELETE /api/properties/:id - Delete property
router.delete('/:id', PropertyController.deleteProperty)

// GET /api/properties/status/:status - Get properties by status
router.get('/status/:status', PropertyController.getPropertiesByStatus)

export default router

