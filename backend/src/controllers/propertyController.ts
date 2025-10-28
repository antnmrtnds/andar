import { Request, Response } from 'express'
import { supabase } from '../config/supabase'

export class PropertyController {
  static async getAllProperties(req: Request, res: Response) {
    try {
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      res.json({ data, count: data?.length || 0 })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  }

  static async getPropertyById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      res.json({ data })
    } catch (error: any) {
      res.status(404).json({ error: error.message })
    }
  }

  static async createProperty(req: Request, res: Response) {
    try {
      const propertyData = req.body
      const { data, error } = await supabase
        .from('properties')
        .insert(propertyData)
        .select()
        .single()

      if (error) throw error

      res.status(201).json({ data })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async updateProperty(req: Request, res: Response) {
    try {
      const { id } = req.params
      const updates = req.body
      const { data, error } = await supabase
        .from('properties')
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

  static async deleteProperty(req: Request, res: Response) {
    try {
      const { id } = req.params
      const { error } = await supabase
        .from('properties')
        .delete()
        .eq('id', id)

      if (error) throw error

      res.json({ message: 'Property deleted successfully' })
    } catch (error: any) {
      res.status(400).json({ error: error.message })
    }
  }

  static async getPropertiesByStatus(req: Request, res: Response) {
    try {
      const { status } = req.params
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('status', status)
        .order('created_at', { ascending: false })

      if (error) throw error

      res.json({ data, count: data?.length || 0 })
    } catch (error: any) {
      res.status(500).json({ error: error.message })
    }
  }
}

