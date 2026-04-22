"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createSupabaseClient } from '@/lib/supabase/client'
import type { MenuItem } from '@/types/menu'
import type { Database } from '@/types/supabase'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Switch } from '@/components/ui/Switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'

type SupabaseMenuItem = Database['public']['Tables']['menu_items']['Row']

export default function AdminDashboard() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [isRestaurantOpen, setIsRestaurantOpen] = useState(true)
  const [newItem, setNewItem] = useState<Omit<MenuItem, 'id'>>({ 
    name: '', 
    description: '', 
    price: 0, 
    category: 'viandes', 
    isSignature: false, 
    isLocal: false, 
    isSoldOut: false,
    allergens: [] 
  })
  const router = useRouter()
  let supabase: ReturnType<typeof createSupabaseClient> | null = null

  // Check auth on mount
  useEffect(() => {
    // Only run this code on the client side
    if (typeof window !== 'undefined') {
      supabase = createSupabaseClient()
      
      const checkAuth = async () => {
        const { data: { session } } = await supabase!.auth.getSession()
        if (!session) {
          router.push('/login')
        }
      }
      checkAuth()
      
      const fetchInitialData = async () => {
        // Fetch menu items
        const { data: menuData, error: menuError } = await supabase!
          .from('menu_items')
          .select('*')
          .order('created_at', { ascending: true })
        
        if (!menuError && menuData) {
          setMenuItems(menuData.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description,
            price: item.price,
            category: item.category as any,
            isSignature: item.is_signature,
            isLocal: item.is_local,
            isSoldOut: item.is_sold_out,
            allergens: item.allergens || []
          })))
        }
        
        // Fetch restaurant status
        const { data: statusData, error: statusError } = await supabase!
          .from('restaurant_status')
          .select('is_open')
          .limit(1)
          .single()
        
        if (!statusError && statusData) {
          setIsRestaurantOpen(statusData.is_open)
        }
      }
      
      fetchInitialData()
    }
  }, [router])

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!supabase) return
    
    const { data, error } = await supabase
      .from('menu_items')
      .insert([{
        name: newItem.name,
        description: newItem.description,
        price: newItem.price,
        category: newItem.category,
        is_signature: newItem.isSignature,
        is_local: newItem.isLocal,
        is_sold_out: newItem.isSoldOut,
        allergens: newItem.allergens
      }])
      .select()
    
    if (!error && data) {
      const insertedItem = data[0]
      setMenuItems([...menuItems, {
        id: insertedItem.id,
        name: insertedItem.name,
        description: insertedItem.description,
        price: insertedItem.price,
        category: insertedItem.category as any,
        isSignature: insertedItem.is_signature,
        isLocal: insertedItem.is_local,
        isSoldOut: insertedItem.is_sold_out,
        allergens: insertedItem.allergens || []
      }])
      setNewItem({ 
        name: '', 
        description: '', 
        price: 0, 
        category: 'viandes', 
        isSignature: false, 
        isLocal: false, 
        isSoldOut: false,
        allergens: [] 
      })
    }
  }

  const handleToggleStatus = async () => {
    if (!supabase) return
    
    const newStatus = !isRestaurantOpen
    
    const { data, error } = await supabase
      .from('restaurant_status')
      .update({ is_open: newStatus })
      .eq('id', 'main')
      .select()
    
    if (!error && data) {
      setIsRestaurantOpen(newStatus)
    }
  }

  const handleDeleteItem = async (id: string) => {
    if (!supabase) return
    
    const { error } = await supabase
      .from('menu_items')
      .delete()
      .eq('id', id)
    
    if (!error) {
      setMenuItems(menuItems.filter(item => item.id !== id))
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-serif text-stone-900">Dashboard Admin</h1>
          <Button variant="outline" onClick={() => supabase?.auth.signOut()}>
            Déconnexion
          </Button>
        </div>

        {/* Live Status Control */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Statut du Restaurant</span>
              <Switch 
                checked={isRestaurantOpen} 
                onCheckedChange={handleToggleStatus}
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-stone-600">
              Le statut actuel est <span className="font-bold">{isRestaurantOpen ? 'OUVERT' : 'FERMÉ'}</span>. 
              Basculer le switch pour modifier l'état affiché sur le site.
            </p>
          </CardContent>
        </Card>

        {/* Add New Item */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Ajouter un Nouveau Plat</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddItem} className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  label="Nom du plat"
                  value={newItem.name}
                  onChange={(e) => setNewItem({...newItem, name: e.target.value})}
                  required
                />
                <Textarea
                  label="Description"
                  value={newItem.description}
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                  required
                />
                <Input
                  label="Prix (€)"
                  type="number"
                  step="0.01"
                  value={newItem.price}
                  onChange={(e) => setNewItem({...newItem, price: parseFloat(e.target.value) || 0})}
                  required
                />
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">Catégorie</label>
                  <select
                    value={newItem.category}
                    onChange={(e) => setNewItem({...newItem, category: e.target.value as any})}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    <option value="viandes">Viandes Maturées</option>
                    <option value="pizzas">Pizzas au Feu de Bois</option>
                    <option value="salades">Salades</option>
                    <option value="desserts">Desserts</option>
                  </select>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={newItem.isSignature}
                      onCheckedChange={(checked) => setNewItem({...newItem, isSignature: checked})}
                    />
                    <span className="text-sm text-stone-700">Signature</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={newItem.isLocal}
                      onCheckedChange={(checked) => setNewItem({...newItem, isLocal: checked})}
                    />
                    <span className="text-sm text-stone-700">Local</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch 
                      checked={newItem.isSoldOut}
                      onCheckedChange={(checked) => setNewItem({...newItem, isSoldOut: checked})}
                    />
                    <span className="text-sm text-stone-700">Rupture</span>
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Ajouter le Plat
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Menu Items List */}
        <Card>
          <CardHeader>
            <CardTitle>Gestion du Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-white border border-stone-200 rounded-lg">
                  <div>
                    <h3 className="font-serif text-lg text-stone-900">{item.name}</h3>
                    <p className="text-sm text-stone-500">{item.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm font-bold text-brand-600">{item.price.toFixed(2)}€</span>
                      {item.isSignature && (
                        <span className="text-[10px] text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded font-medium">
                          Signature
                        </span>
                      )}
                      {item.isLocal && (
                        <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded font-medium">
                          Local
                        </span>
                      )}
                      {item.isSoldOut && (
                        <span className="text-[10px] text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded font-medium">
                          Rupture
                        </span>
                      )}
                    </div>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}