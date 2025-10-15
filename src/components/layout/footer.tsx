'use client'
import { useState, FormEvent } from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    // TODO: integrate subscribe logic
    alert(`Subscribed: ${email}`);
    setEmail('');
  };

  return (
    <footer className="relative pt-20">

        <div className="sm:absolute sm:inset-x-0 sm:bottom-[70%] flex justify-center">
          <form
            onSubmit={handleSubscribe}
            className="bg-green-400 sm:rounded-2xl shadow-lg flex flex-col sm:flex-row gap-4 px-6 py-4 w-full max-w-4xl"
          >
            <span className="text-green-900 font-semibold text-lg">
              Subscribe to our newsletter
            </span>
            <div className="flex items-center w-full gap-2">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-grow p-2 rounded-md border bg-white border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      {/* 2. Main Footer Content */}
      <div className="rlative bg-green-700 text-green-100 pt-16 pb-8 ">

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* About & Socials */}
          <div>
            <h3 className="font-bold text-xl mb-2">About Us</h3>
            <p className="text-sm mb-4">
              Promoting nature-based beekeeping for eco-friendly livelihoods in Northern Uganda.
            </p>
            <div className="flex space-x-4 text-2xl">
              <Link href="https://facebook.com/kitamunaturalorganics" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-white" />
              </Link>
              <Link href="https://twitter.com/kitamunaturalorganics" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-white" />
              </Link>
              <Link href="https://youtube.com/kitamunaturalorganics" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="font-bold text-xl mb-2">Pages</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-xl mb-2">Contact</h3>
            <ul className="text-sm space-y-1">
              <li>Kitamu Natural Organics Ltd.</li>
              <li>P.O. Box 350148, Kitgum, Uganda</li>
              <li><Link href="mailto:info@kitamunaturalorganics.com" className="hover:text-white">info@kitamunaturalorganics.com</Link></li>
              <li><Link href="tel:+256782976755" className="hover:text-white">+256 782 976 755</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright */}
      <div className="bg-green-950 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Kitamu Natural Organics. All rights reserved.
      </div>
    </footer>
  );
}
