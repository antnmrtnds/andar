import { Request, Response } from 'express'
import { supabase } from '../config/supabase'

export class DeveloperController {
  static async getAllDevelopers(req: Request, res: Response) {
    try {
      const { data, error } = await supabase
        .from('developers')
        .select('*')
        .order('name', { ascending: true })

      if (error) throw error

      res.json({ data, count: data?.length || 0 })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getDeveloperById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { data, error } = await supabase
        .from('developers')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      res.json({ data })
    } catch (error: any) {
      res.status(404).json({ error: error.message })
    }
  }

  static async createDeveloper(req: Request, res: Response) {
    try {
      const developerData = req.body
      const { data, error } = await supabase
        .from('developers')
        .insert(developerData)
        .select()
        .single()

      if (error) throw error

      res.status(201).json({ data })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async updateDeveloper(req: Request, res: Response) {
    try {
      const { id } = req.params
      const updates = req.body
      const { data, error } = await supabase
        .from('developers')
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

  static async deleteDeveloper(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { error } = await supabase
        .from('developers')
        .delete()
        .eq('id', id)

      if (error) throw error

      res.json({ message: 'Developer deleted successfully' })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }
}

