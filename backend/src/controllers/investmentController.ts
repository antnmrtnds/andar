import { Request, Response } from 'express'
import { supabase } from '../config/supabase'

export class InvestmentController {
  static async getAllInvestments(req: Request, res: Response) {
    try {
      const { data, error } = await supabase
        .from('investments')
        .select('*, properties(*), users(*)')
        .order('created_at', { ascending: false })

      if (error) throw error

      res.json({ data, count: data?.length || 0 })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getInvestmentById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { data, error } = await supabase
        .from('investments')
        .select('*, properties(*), users(*)')
        .eq('id', id)
        .single()

      if (error) throw error

      res.json({ data })
    } catch (error: any) {
      res.status(404).json({ error: error.message })
    }
  }

  static async createInvestment(req: Request, res: Response) {
    try {
      const investmentData = req.body
      const { data, error } = await supabase
        .from('investments')
        .insert(investmentData)
        .select()
        .single()

      if (error) throw error

      res.status(201).json({ data })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async updateInvestment(req: Request, res: Response) {
    try {
      const { id } = req.params
      const updates = req.body
      const { data, error } = await supabase
        .from('investments')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      res.json({ data })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async deleteInvestment(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { error } = await supabase
        .from('investments')
        .delete()
        .eq('id', id)

      if (error) throw error

      res.json({ message: 'Investment deleted successfully' })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getInvestmentsByUser(req: Request, res: Response) {
    try {
      const { userId } = req.params
      const { data, error } = await supabase
        .from('investments')
        .select('*, properties(*)')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

      if (error) throw error

      res.json({ data, count: data?.length || 0 })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  }
}

