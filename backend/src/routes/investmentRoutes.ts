import { Router } from 'express'
import { InvestmentController } from '../controllers/investmentController'

const router = Router()

// GET /api/investments - Get all investments
router.get('/', InvestmentController.getAllInvestments)

// GET /api/investments/:id - Get investment by ID
router.get('/:id', InvestmentController.getInvestmentById)

// POST /api/investments - Create new investment
router.post('/', InvestmentController.createInvestment)

// PUT /api/investments/:id - Update investment
router.put('/:id', InvestmentController.updateInvestment)

// DELETE /api/investments/:id - Delete investment
router.delete('/:id', InvestmentController.deleteInvestment)

// GET /api/investments/user/:userId - Get investments by user
router.get('/user/:userId', InvestmentController.getInvestmentsByUser)

export default router

