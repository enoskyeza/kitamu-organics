'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed z-50 left-1/2 transform -translate-x-1/2 transition-all duration-500",
        scrolled
          ? "top-0 w-full rounded-none bg-white shadow-md"
          : "top-4 w-[90%] rounded-2xl bg-white shadow-xl"
      )}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-xl font-bold text-green-800">Kitamu</div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-green-700 hover:text-green-900 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl transition">
          Shop Now
        </button>
      </div>
    </nav>
  );
}
