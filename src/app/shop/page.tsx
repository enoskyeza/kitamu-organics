'use client'
import {useState} from 'react'
import products from '@/data/products.json'
import Image from 'next/image'
import {useCart} from '@/contexts/CartContext'
import {Product} from '@/types'

const categories = ['all', ...Array.from(new Set((products as Product[]).map(p => p.category)))]

export default function ShopPage() {
  const [filter, setFilter] = useState('all')
  const {addItem} = useCart()
  const items = (products as Product[]).filter(p => filter === 'all' || p.category === filter)

  const formatPrice = (price:number) => `UGX ${price.toLocaleString()}`

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex gap-6">
        <aside className="w-40 shrink-0 hidden sm:block">
          <h3 className="font-semibold mb-2">Categories</h3>
          <ul className="space-y-1">
            {categories.map(c => (
              <li key={c}>
                <button onClick={() => setFilter(c)} className={`block w-full text-left capitalize ${filter===c?'font-bold text-green-800':'text-gray-600'}`}>{c}</button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map(product => (
              <div key={product.id} className="border rounded-lg p-3 text-center shadow-sm bg-white">
                <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto h-32 w-auto object-contain" />
                <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
                <p className="text-green-700 text-sm">{formatPrice(product.price)}</p>
                <button onClick={() => addItem(product)} className="btn btn-sm mt-2 thm-bg-primary text-white">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
