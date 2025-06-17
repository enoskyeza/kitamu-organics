'use client'
import {useEffect, useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import {FaShoppingCart, FaUserCircle} from "react-icons/fa";
import Image from "next/image";

const navItems = [
    {label: 'Home', href: '/home'},
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
    console.log(pathname)
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
            <div className="navbar flex items-center justify-between px-6 py-3">
                {/* Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
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
                    <div className="text-xl font-bold text-green-800">
                        Kitamu <span className="hidden md:inline-flex">Organics Limited</span>
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
                    <div className="dropdown dropdown-end space-x-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                {/*<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"*/}
                                {/*     viewBox="0 0 24 24" stroke="currentColor">*/}
                                {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"*/}
                                {/*          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>*/}
                                {/*</svg>*/}
                                <FaShoppingCart className="text-green-700 hover:text-green-900 h-5 w-5 me-[8px]" />
                                <span className="badge badge-sm indicator-item ms-2">0</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-sm font-light">No items in cart</span>
                                {/*<span className="text-lg font-bold">8 Items</span>*/}
                                {/*<span className="text-info">Subtotal: $999</span>*/}
                                {/*<div className="card-actions">*/}
                                {/*    <button className="btn btn-primary btn-block">View cart</button>*/}
                                {/*</div>*/}
                            </div>
                        </div>
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
    );
}

