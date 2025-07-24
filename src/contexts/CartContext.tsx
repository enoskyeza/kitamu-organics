// 'use client'
// import {createContext, useContext, useState, ReactNode} from 'react'
// import {Product} from '@/types'
//
// export interface CartItem extends Product {
//   quantity: number
// }
//
// interface CartState {
//   items: CartItem[]
//   addItem: (product: Product) => void
//   removeItem: (id: string) => void
//   clear: () => void
// }
//
// const CartContext = createContext<CartState | undefined>(undefined)
//
// export function CartProvider({children}:{children:ReactNode}) {
//   const [items, setItems] = useState<CartItem[]>([])
//
//   const addItem = (product: Product) => {
//     setItems(prev => {
//       const existing = prev.find(i => i.id === product.id)
//       if (existing) {
//         return prev.map(i =>
//           i.id === product.id ? {...i, quantity: i.quantity + 1} : i
//         )
//       }
//       return [...prev, {...product, quantity: 1}]
//     })
//   }
//
//   const removeItem = (id: number) =>
//     setItems(prev => prev.filter(i => i.id !== id))
//
//   const clear = () => setItems([])
//
//   return (
//     <CartContext.Provider value={{items, addItem, removeItem, clear}}>
//       {children}
//     </CartContext.Provider>
//   )
// }
//
// export function useCart() {
//   const ctx = useContext(CartContext)
//   if (!ctx) throw new Error('useCart must be within CartProvider')
//   return ctx
// }
