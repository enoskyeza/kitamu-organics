'use client'

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Sample data (replace with real data or fetch from API)
const saleBanners = [
  { id: 1, title: 'Summer Honey Sale: 20% Off', subtitle: 'Pure organic honey from our farms', image: '/banners/honey-sale.jpg' },
  { id: 2, title: 'Shea Butter Special', subtitle: '30% Off Cold-Pressed Shea Butter', image: '/banners/shea-sale.jpg' },
  { id: 3, title: 'New Lemongrass Oil', subtitle: 'Buy 2 Get 1 Free', image: '/banners/lemongrass-sale.jpg' },
];

const featuredProducts = [
  { id: 1, name: 'Kitamu Honey', price: 'UGX15,000', image: '/products/honey-jar.jpg' },
  { id: 2, name: 'Shea Butter (Cold‑Pressed)', price: 'UGX12,050', image: '/products/shea-butter.jpg' },
  { id: 3, name: 'Kitamu Odii (Peanut & Sesame)', price: 'UGX10,000', image: '/products/odii-mix.jpg' },
  { id: 4, name: 'Lemongrass Oil', price: 'UGX18,000', image: '/products/lemongrass-oil.jpg' },
];

export default function ProductsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((current - 1 + saleBanners.length) % saleBanners.length);
  const next = () => setCurrent((current + 1) % saleBanners.length);

  return (
    <section className="py-20 bg-white">
      {/* Sale Banner Carousel */}
      <div className="relative max-w-5xl mx-auto">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src={saleBanners[current].image}
            alt={saleBanners[current].title}
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button onClick={prev} className="p-2 bg-white/80 rounded-full hover:bg-white">
            <FaChevronLeft className="text-green-800" />
          </button>
          <button onClick={next} className="p-2 bg-white/80 rounded-full hover:bg-white">
            <FaChevronRight className="text-green-800" />
          </button>
        </div>
        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold text-green-900">
            {saleBanners[current].title}
          </h3>
          <p className="text-green-700 mt-1">
            {saleBanners[current].subtitle}
          </p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <div key={product.id} className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-lg text-green-900">{product.name}</h4>
              <p className="text-green-700 mt-1">{product.price}</p>
              <button className="mt-4 w-full bg-gold-500 hover:bg-gold-600 text-white py-2 rounded-lg font-medium transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
