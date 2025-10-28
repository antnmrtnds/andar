import { Router } from 'express'
import { DeveloperController } from '../controllers/developerController'

const router = Router()

// GET /api/developers - Get all developers
router.get('/', DeveloperController.getAllDevelopers)

// GET /api/developers/:id - Get developer by ID
router.get('/:id', DeveloperController.getDeveloperById)

// POST /api/developers - Create new developer
router.post('/', DeveloperController.createDeveloper)

// PUT /api/developers/:id - Update developer
router.put('/:id', DeveloperController.updateDeveloper)

// DELETE /api/developers/:id - Delete developer
router.delete('/:id', DeveloperController.deleteDeveloper)

export default router

