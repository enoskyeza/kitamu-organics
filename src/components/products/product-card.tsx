'use client';

import Image from 'next/image';
import Link from 'next/link';
import {  ShoppingCart, Heart } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';
import type { Product } from '@/types';
import { toast } from 'react-hot-toast';
import {useCartStore} from "@/lib/store";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);


  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart!`);
  };

  // const renderStars = (rating: number) => {
  //   return Array.from({ length: 5 }, (_, i) => (
  //     <Star
  //       key={i}
  //       className={`w-4 h-4 ${
  //         i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
  //       }`}
  //     />
  //   ));
  // };

  return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 space-y-1 space-x-2">
            {product.isOrganic && (
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                Organic
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                Discount
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
          </button>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-2 right-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <Link href={`/products/${product.id}`}>
                <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                  {product.name}
                </h3>
          </Link>
          
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          {/*<div className="flex items-center space-x-2 mb-2">*/}
          {/*  <div className="flex items-center">*/}
          {/*    {renderStars(product.rating)}*/}
          {/*  </div>*/}
          {/*  <span className="text-sm text-gray-500">*/}
          {/*    ({product.reviewCount})*/}
          {/*  </span>*/}
          {/*</div>*/}
          {/* Size */}
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-xs text-gray-900 font-medium">
             Size: {product.weight}
            </span>
          </div>
          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatCurrency(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <button onClick={handleAddToCart} className="btn btn-sm mt-2 thm-bg-primary text-white">Add to cart</button>

          {/* Origin */}
          {/*<div className="mt-2">*/}
          {/*  <span className="text-xs text-green-600 font-medium">*/}
          {/*    From {product.origin}*/}
          {/*  </span>*/}
          {/*</div>*/}

          {/* Stock Status */}
          {product.stockQuantity < 10 && product.inStock && (
            <div className="mt-2">
              <span className="text-xs text-orange-600 font-medium">
                Only {product.stockQuantity} left!
              </span>
            </div>
          )}

          {!product.inStock && (
            <div className="mt-2">
              <span className="text-xs text-red-600 font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </div>
  );
}