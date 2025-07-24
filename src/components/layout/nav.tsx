'use client'
import {useEffect, useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {FaShoppingCart, FaUserCircle} from "react-icons/fa";
import Image from "next/image";
import {CartDropdown} from "@/components/cart/cart-dropdown";
import {useCartStore} from "@/lib/store";
import {ShoppingCart} from "lucide-react";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'Shop', href: '/shop'},
    {
        label: 'Projects', href: '/projects', subItems: [
            {label: 'Beekeeping', href: '/projects/beekeeping'},
            {label: 'FMNR', href: '/projects/fmnr'},
        ]
    },
    {label: 'Contact', href: '/contact'},
];
export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { items} = useCartStore();
    // const {items, removeItem} = useCart();
    const cartCount = items.reduce((s, i) => s + i.quantity, 0);
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const landing = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <nav
                className={clsx(
                    "z-50 ",
                    scrolled
                        ? "fixed top-0 w-full rounded-none bg-white shadow-md left-1/2 transform -translate-x-1/2 transition-all duration-500"
                        : landing
                            ? "absolute top-4 w-[90%] rounded-2xl bg-white shadow-xl left-1/2 transform -translate-x-1/2 transition-all duration-500"
                            : "top-0 w-full rounded-none bg-white shadow-md left-1 "
                )}
            >

                <div className="navbar container flex items-center justify-between px-6 py-3">
                    {/* Logo */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-gray-800" fill="none"
                                     viewBox="0 0 24 24"
                                    // stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h8m-8 6h16"/>
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        {item.subItems ? (
                                            <details className="group">
                                                <summary className={clsx(
                                                    'cursor-pointer font-medium transition-colors',
                                                    pathname.startsWith(item.href) ? 'text-green-900' : 'text-gray-600 hover:text-green-900'
                                                )}>
                                                    {item.label}
                                                </summary>
                                                <ul className="p-2">
                                                    {item.subItems.map(sub => (
                                                        <li key={sub.href}>
                                                            <Link
                                                                href={sub.href}
                                                                className={clsx(
                                                                    'block px-4 py-1 rounded hover:bg-gray-100',
                                                                    pathname === sub.href ? 'font-semibold text-green-900' : 'text-gray-600'
                                                                )}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </details>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className={clsx(
                                                    'font-medium transition-colors',
                                                    pathname === item.href ? 'font-semibold text-green-900' : 'text-gray-600 hover:text-green-900'
                                                )}
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                        }
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Image
                            src="/logo.png"
                            alt="Kitamu Organics Logo"
                            width={50}
                            height={50}
                            className="me-3"
                        />
                        <div className="hidden xs:flex md:hidden lg:flex gap-1.5 text-xl font-bold text-green-800">
                            Kitamu <span className="hidden xl:inline-flex">Organics Limited</span>
                        </div>
                    </div>

                    {/* Nav Links */}
                    <div className="navbar-center hidden md:flex space-x-6">
                        <ul className="menu menu-horizontal px-1">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    {item.subItems ? (
                                        <details className="group">
                                            <summary className={clsx(
                                                'cursor-pointer font-medium transition-colors',
                                                pathname.startsWith(item.href) ? 'text-green-900' : 'text-gray-600 hover:text-green-900'
                                            )}>
                                                {item.label}
                                            </summary>
                                            <ul className="p-2">
                                                {item.subItems.map(sub => (
                                                    <li key={sub.href}>
                                                        <Link
                                                            href={sub.href}
                                                            className={clsx(
                                                                'block px-4 py-1 rounded hover:bg-gray-100',
                                                                pathname === sub.href ? 'font-semibold text-green-900' : 'text-gray-600'
                                                            )}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={clsx(
                                                'font-medium transition-colors',
                                                pathname === item.href ? 'font-semibold text-green-900' : 'text-gray-600 hover:text-green-900'
                                            )}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                    }
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="navbar-end ">
                        <div className="relative me-2">
                          <button
                            onClick={() => setIsCartOpen(!isCartOpen)}
                            className="btn btn-ghost btn-circle"
                          >
                              <FaShoppingCart className="text-green-700 hover:text-green-900 h-5 w-5 me-[8px]"/>
                            {cartCount > 0 && (
                              <span className="absolute -top-1 -right-1 bg-orange-400 text-gray-800 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                              </span>
                            )}
                          </button>
                          <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <FaUserCircle className="text-gray-700 hover:text-gray-900 h-7 w-7"/>
                                {/*<div className="w-10 rounded-full">*/}
                                {/*    <img*/}
                                {/*        alt="Tailwind CSS Navbar component"*/}
                                {/*        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"/>*/}
                                {/*</div>*/}
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

            {checkoutOpen && (
                <div className="modal modal-open">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Payment Options</h3>
                        <p className="mb-2"><span className="font-semibold">AirtelPay:</span> *185*9*2#</p>
                        <p className="mb-2"><span className="font-semibold">Momo Pay:</span> *165*4*4#</p>
                        <p className="mb-4"><span className="font-semibold">Call to Order:</span> <a
                            href="tel:+256782976755" className="text-green-700">+256 782 976 755</a></p>
                        <div className="modal-action">
                            <button className="btn" onClick={() => setCheckoutOpen(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
};

