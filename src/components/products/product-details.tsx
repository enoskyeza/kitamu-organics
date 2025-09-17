'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ShoppingCart, Heart, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { formatCurrency } from '@/lib/utils';
import type { Product } from '@/types';
import { toast } from 'react-hot-toast';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to cart!`);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="flex space-x-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-green-600' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Title and Rating */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600 ml-2">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              {product.isOrganic && (
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">
                  Certified Organic
                </span>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-gray-900">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
            <span className="text-sm text-gray-600">
              per {product.weight}
            </span>
          </div>

          {/* Description */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Origin */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-900">Origin:</span>
            <span className="text-sm text-green-600 font-medium">
              {product.origin}
            </span>
          </div>

          {/* Nutritional Info */}
          {product.nutritionalInfo && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Nutritional Information</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span>Calories:</span>
                  <span>{product.nutritionalInfo.calories} per 100g</span>
                </div>
                <div className="flex justify-between">
                  <span>Protein:</span>
                  <span>{product.nutritionalInfo.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbs:</span>
                  <span>{product.nutritionalInfo.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fat:</span>
                  <span>{product.nutritionalInfo.fat}g</span>
                </div>
                <div className="flex justify-between">
                  <span>Fiber:</span>
                  <span>{product.nutritionalInfo.fiber}g</span>
                </div>
              </div>
              {product.nutritionalInfo.vitamins.length > 0 && (
                <div className="mt-3">
                  <span className="text-sm font-medium">Rich in: </span>
                  <span className="text-sm">{product.nutritionalInfo.vitamins.join(', ')}</span>
                </div>
              )}
            </div>
          )}

          {/* Add to Cart */}
          <div className="space-y-4">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-900">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-50"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 text-center min-w-12">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-50"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Stock Status */}
            <div>
              {product.inStock ? (
                <span className="text-green-600 text-sm font-medium">
                  ✓ In stock ({product.stockQuantity} available)
                </span>
              ) : (
                <span className="text-red-600 text-sm font-medium">
                  ✗ Out of stock
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm font-medium">Quality Guarantee</div>
                <div className="text-xs text-gray-500">100% organic certified</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm font-medium">Free Delivery</div>
                <div className="text-xs text-gray-500">Orders over UGX 50,000</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="w-5 h-5 text-green-600" />
              <div>
                <div className="text-sm font-medium">Easy Returns</div>
                <div className="text-xs text-gray-500">7-day return policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}