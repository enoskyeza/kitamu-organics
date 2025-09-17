'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatCurrency } from '@/lib/utils';

interface CartDropdownProps {
  isOpen: boolean;
  onCloseAction: () => void;
}

export function CartDropdown({ isOpen, onCloseAction }: CartDropdownProps) {
  const { items, updateQuantity, removeItem, getCartTotal } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg border border-gray-200 shadow-lg  z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Shopping Cart</h3>
          <button onClick={onCloseAction} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-6 text-center">
            <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Your cart is empty</p>
            <Link
              href="/shop"
              onClick={onCloseAction}
              className="inline-block mt-4 text-green-600 hover:text-green-700 font-medium"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {formatCurrency(item.product.price)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-semibold">Total:</span>
                <span className="text-lg font-bold text-green-600">
                  {formatCurrency(getCartTotal())}
                </span>
              </div>
              
              <div className="space-y-2">
                <Link
                  href="/shop/cart"
                  onClick={onCloseAction}
                  className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors block"
                >
                  View Cart
                </Link>
                <Link
                  href="/shop/checkout"
                  onClick={onCloseAction}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-green-700 transition-colors block"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}