'use client'

import {useState} from 'react'
import Image from 'next/image'
import {FaChevronLeft, FaChevronRight, FaLeaf} from 'react-icons/fa'
import Link from "next/link";
import {ProductCard} from "@/components/products/product-card";
import {products} from "@/lib/data";

// Sample data (replace with real data or fetch from API)
const saleBanners = [
    {id: 1, title: 'Summer Honey Sale: 20% Off', image: '/banners/shea-sale.jpg'},
    {id: 2, title: 'Shea Butter Special', image: '/banners/honey-sale.jpg'},
    {id: 3, title: 'New Lemongrass Oil', image: '/banners/lemongrass-sale.jpg'},
]



export default function ProductsSection() {
    const [current, setCurrent] = useState(0)
    const prev = () => setCurrent((current - 1 + saleBanners.length) % saleBanners.length)
    const next = () => setCurrent((current + 1) % saleBanners.length)

    const featuredProducts = products.filter(product => product.featured)
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
              <h2 className="thm-section-title thm-text-primary">From farm to shelves</h2>
            </div>

            {/* Featured Products Grid */}
            <div
                className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
                {featuredProducts.map(product => (
                    <ProductCard product={product} key={product.id} />
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
