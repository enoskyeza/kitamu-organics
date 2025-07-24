'use client'

import {useState} from 'react'
import Image from 'next/image'
import {FaChevronLeft, FaChevronRight, FaHeart, FaLeaf, FaShoppingCart} from 'react-icons/fa'
import Link from "next/link";

// Sample data (replace with real data or fetch from API)
const saleBanners = [
    {id: 1, title: 'Summer Honey Sale: 20% Off', image: '/banners/shea-sale.jpg'},
    {id: 2, title: 'Shea Butter Special', image: '/banners/honey-sale.jpg'},
    {id: 3, title: 'New Lemongrass Oil', image: '/banners/lemongrass-sale.jpg'},
]

const featuredProducts = [
    {id: 1, fav:false, name: 'Kitamu Honey', price: 'UGX15,000', image: '/products/jerrycan.png'},
    {id: 2, fav:false, name: 'Shea Butter (Cold‑Pressed)', price: 'UGX12,050', image: '/products/shea.png'},
    {id: 3, fav:true, name: 'Kitamu Odii (Peanut & Sesame)', price: 'UGX10,000', image: '/products/odii.png'},
    {id: 4, fav:false, name: 'Lemongrass Oil', price: 'UGX18,000', image: '/products/lemongrass.png'},
]

export default function ProductsSection() {
    const [current, setCurrent] = useState(0)
    const prev = () => setCurrent((current - 1 + saleBanners.length) % saleBanners.length)
    const next = () => setCurrent((current + 1) % saleBanners.length)

    return (
        <section className="w-full bg-white py-20">
            {/* Sale Banner Carousel */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative w-full overflow-hidden rounded-xl shadow-bidirectional">
                    <Image
                        src={saleBanners[current].image}
                        alt={saleBanners[current].title}
                        width={1200}
                        height={400}
                        className="w-full h-auto object-cover sm:h-64 md:h-80"
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-4">
                        <button onClick={prev} className="p-2 bg-white/80 rounded-full hover:bg-white transition">
                            <FaChevronLeft className="text-green-800"/>
                        </button>
                        <button onClick={next} className="p-2 bg-white/80 rounded-full hover:bg-white transition">
                            <FaChevronRight className="text-green-800"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Products Heading */}

            <div className="container mx-auto text-center mt-12 xl:mb-30 px-4 sm:px-6 lg:px-8">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full thm-bg-secondary">
                  <FaLeaf className="text-white text-xl" />
                </div>
                <span className="ml-3 text-sm font-medium thm-text-secondary uppercase tracking-wide">
                  Featured Products
                </span>
              </div>
              <h2 className="thm-section-title thm-text-primary">Experience The Real Agriculture</h2>
            </div>

            {/* Featured Products Grid */}
            <div
                className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredProducts.map(product => (
                    <div key={product.id}
                         className="relative rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105 overflow-visible">
                        {/* Product Image */}
                        <div className="relative w-full h-45">
                            <div
                                className="absolute w-full -top-27 left-0"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    // fill
                                    width={300}
                                    height={100}
                                    className="object-cover rounded-t-xl"
                                    priority
                                />
                            </div>
                        </div>
                        {/* Favorite Icon */}
                        <button
                            className="absolute top-3 right-3 bg-white/70 p-1 rounded-full hover:bg-white transition">
                            {product.fav ? <FaHeart className="text-red-500" /> : <FaHeart className="text-gray-300" />}
                        </button>
                        {/* Content */}
                        <div className="p-4 pt-12 text-center">
                            <h3 className="font-semibold text-lg text-green-900">{product.name}</h3>
                            <p className="text-green-700 mt-1">{product.price}</p>
                            <button
                                className="mt-4 inline-flex items-center justify-center w-fit px-4 thm-bg-secondary
                                text-white py-2 rounded-lg font-medium hover:opacity-90 transition cursor-pointer">
                                <FaShoppingCart className="mr-2"/> Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center w-full pt-4 mt-2">
            <Link
                href={"/shop"}
                className="mt-4  px-4 thm-bg-primary
                text-white py-2 rounded-lg font-medium hover:opacity-90 transition cursor-pointer">
                Explore more Products
            </Link>
            </div>
        </section>
    )
}


// 'use client'
//
// import { useState } from 'react';
// import Image from 'next/image';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
//
// // Sample data (replace with real data or fetch from API)
// const saleBanners = [
//   { id: 1, title: 'Summer Honey Sale: 20% Off', subtitle: 'Pure organic honey from our farms', image: '/banners/shea-sale.jpg' },
//   { id: 2, title: 'Shea Butter Special', subtitle: '30% Off Cold-Pressed Shea Butter', image: '/banners/honey-sale.jpg' },
//   { id: 3, title: 'New Lemongrass Oil', subtitle: 'Buy 2 Get 1 Free', image: '/banners/lemongrass-sale.jpg' },
// ];
//
// const featuredProducts = [
//   { id: 1, name: 'Kitamu Honey', price: 'UGX15,000', image: '/products/honey-jar.jpg' },
//   { id: 2, name: 'Shea Butter (Cold‑Pressed)', price: 'UGX12,050', image: '/products/shea-butter.jpg' },
//   { id: 3, name: 'Kitamu Odii (Peanut & Sesame)', price: 'UGX10,000', image: '/products/odii-mix.jpg' },
//   { id: 4, name: 'Lemongrass Oil', price: 'UGX18,000', image: '/products/lemongrass-oil.jpg' },
// ];
//
// export default function ProductsSection() {
//   const [current, setCurrent] = useState(0);
//
//   const prev = () => setCurrent((current - 1 + saleBanners.length) % saleBanners.length);
//   const next = () => setCurrent((current + 1) % saleBanners.length);
//
//   return (
//     <section className="py-20 bg-white">
//       {/* Sale Banner Carousel */}
//       <div className="relative max-w-5xl mx-auto">
//         <div className="overflow-hidden rounded-xl shadow-lg">
//           <Image
//             src={saleBanners[current].image}
//             alt={saleBanners[current].title}
//             width={1200}
//             height={400}
//             className="w-full h-64 object-cover"
//           />
//         </div>
//         <div className="absolute inset-0 flex items-center justify-between px-4">
//           <button onClick={prev} className="p-2 bg-white/80 rounded-full hover:bg-white">
//             <FaChevronLeft className="text-green-800" />
//           </button>
//           <button onClick={next} className="p-2 bg-white/80 rounded-full hover:bg-white">
//             <FaChevronRight className="text-green-800" />
//           </button>
//         </div>
//         <div className="text-center mt-4">
//           <h3 className="text-2xl font-bold text-green-900">
//             {saleBanners[current].title}
//           </h3>
//           <p className="text-green-700 mt-1">
//             {saleBanners[current].subtitle}
//           </p>
//         </div>
//       </div>
//
//       {/* Featured Products */}
//       <div className="mt-16 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {featuredProducts.map((product) => (
//           <div key={product.id} className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
//             <div className="relative w-full h-48">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-4">
//               <h4 className="font-semibold text-lg text-green-900">{product.name}</h4>
//               <p className="text-green-700 mt-1">{product.price}</p>
//               <button className="mt-4 w-full bg-gold-500 hover:bg-gold-600 text-white py-2 rounded-lg font-medium transition">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
