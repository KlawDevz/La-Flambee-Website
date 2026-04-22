export type Category = 'viandes' | 'pizzas' | 'salades' | 'desserts'

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: Category
  isSignature: boolean
  isLocal: boolean
  isSoldOut: boolean
  allergens: string[]
}