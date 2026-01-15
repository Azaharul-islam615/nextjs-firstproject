'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Direct server URL - no environment variable needed
const API_URL = 'https://server-pi-six-87.vercel.app';

export default function ItemsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        async function fetchItems() {
            try {
                const res = await fetch(`${API_URL}/api/items`);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching items:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchItems();
    }, []);

    const categories = ['All', ...new Set(items.map(item => item.category))];
    const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Collection</h1>
                    <p className="text-xl text-gray-600">Discover premium products curated just for you</p>
                </div>

                {/* Filter Tabs */}
                <div className="mb-8 flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2.5 rounded-full font-medium transition ${filter === category
                                ? 'bg-gray-900 text-white shadow-sm'
                                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Products Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Showing <span className="font-semibold text-gray-900">{filteredItems.length}</span> products
                    </p>
                </div>

                {filteredItems.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                        <div className="text-6xl mb-6">📦</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">No Products Available</h3>
                        <p className="text-gray-600 mb-6">Make sure the Express server is running on port 5000.</p>
                        <code className="bg-gray-100 px-4 py-2 rounded-md text-sm text-gray-700">
                            cd server && npm start
                        </code>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredItems.map((item) => (
                            <Link
                                key={item.id}
                                href={`/items/${item.id}`}
                                className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 bg-gray-100 overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        unoptimized
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                                            {item.category}
                                        </span>
                                    </div>
                                    {/* Quick View Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                        <span className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                            View Details
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition">
                                        {item.name}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-bold text-gray-900">
                                                ${item.price}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through ml-2">
                                                ${(item.price * 1.3).toFixed(2)}
                                            </span>
                                        </div>
                                        <svg
                                            className="w-6 h-6 text-gray-400 group-hover:text-gray-900 transition"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
