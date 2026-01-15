'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

// Direct server URL - no environment variable needed
const API_URL = 'https://server-pi-six-87.vercel.app';

export default function ItemDetailPage() {
    const params = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        async function fetchItem() {
            try {
                const res = await fetch(`${API_URL}/api/items/${params.id}`);
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setItem(data);
            } catch (error) {
                console.error('Error fetching item:', error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        if (params.id) {
            fetchItem();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading product details...</p>
                </div>
            </div>
        );
    }

    if (error || !item) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center max-w-md mx-auto px-4">
                    <div className="text-6xl mb-6">😕</div>
                    <h1 className="text-3xl font-bold mb-4 text-gray-900">Product Not Found</h1>
                    <p className="text-gray-600 mb-8">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                    <Link href="/items" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition font-medium">
                        Browse All Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/items" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Products
                    </Link>
                </div>

                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image Section */}
                        <div className="relative bg-gray-100">
                            <div className="aspect-square relative">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                    priority
                                />
                            </div>
                            {/* Category Badge */}
                            <div className="absolute top-6 left-6">
                                <span className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                                    {item.category}
                                </span>
                            </div>
                        </div>

                        {/* Details Section */}
                        <div className="p-8 lg:p-12 flex flex-col">
                            <div className="flex-grow">
                                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                                    {item.name}
                                </h1>

                                <div className="flex items-baseline gap-4 mb-8">
                                    <span className="text-4xl font-bold text-gray-900">${item.price}</span>
                                    <span className="text-gray-500 line-through text-xl">${(item.price * 1.3).toFixed(2)}</span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                                        Save 30%
                                    </span>
                                </div>

                                <div className="mb-8 pb-8 border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">What&apos;s Included</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Free shipping worldwide</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">30-day return policy</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">2-year warranty</span>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700">Secure payment</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quantity Selector */}
                                <div className="mb-8">
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="w-10 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-10 h-10 rounded-md border-2 border-gray-300 flex items-center justify-center hover:border-gray-900 transition"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                                <button className="flex-1 bg-gray-900 text-white py-4 px-8 rounded-md hover:bg-gray-800 transition font-semibold text-lg shadow-sm">
                                    Add to Cart
                                </button>
                                <button className="sm:w-14 h-14 border-2 border-gray-300 rounded-md flex items-center justify-center hover:border-gray-900 hover:bg-gray-50 transition">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
