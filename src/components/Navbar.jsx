'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Navbar() {
    const { data: session } = useSession();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <Link href="/" className="flex items-center">
                        <span className="text-3xl font-bold text-gray-900 font-serif">ShopHub</span>
                        <span className="ml-2 text-sm text-gray-500 hidden sm:block">Premium Collection</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-700 hover:text-gray-900 transition font-medium">
                            Home
                        </Link>
                        <Link href="/items" className="text-gray-700 hover:text-gray-900 transition font-medium">
                            Products
                        </Link>
                        {session ? (
                            <>
                                <Link href="/add-item" className="text-gray-700 hover:text-gray-900 transition font-medium">
                                    Add Product
                                </Link>
                                <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
                                    <span className="text-sm text-gray-600">Welcome, <span className="font-semibold">{session.user?.name}</span></span>
                                    <button
                                        onClick={() => signOut()}
                                        className="bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition font-medium"
                            >
                                Login
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col gap-4">
                            <Link href="/" className="text-gray-700 hover:text-gray-900 transition font-medium">
                                Home
                            </Link>
                            <Link href="/items" className="text-gray-700 hover:text-gray-900 transition font-medium">
                                Products
                            </Link>
                            {session ? (
                                <>
                                    <Link href="/add-item" className="text-gray-700 hover:text-gray-900 transition font-medium">
                                        Add Product
                                    </Link>
                                    <span className="text-sm text-gray-600">Welcome, {session.user?.name}</span>
                                    <button
                                        onClick={() => signOut()}
                                        className="bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition font-medium text-left"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link
                                    href="/login"
                                    className="bg-gray-900 text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition font-medium text-center"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
