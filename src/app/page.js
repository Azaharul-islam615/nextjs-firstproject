import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiAzNGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTM2IDM0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ Premium Collection 2026
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Elevate Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Lifestyle
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover curated collections of premium products designed to enhance your everyday life. Quality meets elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/items"
                  className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
                >
                  Explore Collection
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                  alt="Premium Products"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose ShopHub</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience shopping reimagined with our commitment to quality, service, and satisfaction
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Get your orders delivered within 24-48 hours. We prioritize speed without compromising safety.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Secure Payments</h3>
              <p className="text-gray-600 leading-relaxed">
                Your transactions are protected with bank-level encryption and fraud detection systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Every product is carefully curated and quality-checked to meet our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find exactly what you&apos;re looking for</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Electronics', icon: '💻', color: 'from-blue-500 to-blue-600', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400' },
              { name: 'Accessories', icon: '👜', color: 'from-pink-500 to-pink-600', image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400' },
              { name: 'Fashion', icon: '👔', color: 'from-purple-500 to-purple-600', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400' },
              { name: 'Home & Living', icon: '🏠', color: 'from-green-500 to-green-600', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400' },
            ].map((category) => (
              <Link
                key={category.name}
                href="/items"
                className="group relative overflow-hidden rounded-2xl aspect-square shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-70 transition`}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <span className="text-5xl mb-3">{category.icon}</span>
                  <h3 className="text-xl font-bold text-center">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Happy Customers', icon: '😊' },
              { number: '1000+', label: 'Products', icon: '📦' },
              { number: '100+', label: 'Brands', icon: '⭐' },
              { number: '24/7', label: 'Support', icon: '💬' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real people</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Fashion Designer',
                text: 'The quality of products is outstanding! Every purchase has exceeded my expectations. ShopHub is now my go-to store.',
                rating: 5,
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
              },
              {
                name: 'Michael Chen',
                role: 'Tech Entrepreneur',
                text: 'Fast shipping, excellent customer service, and premium products. What more could you ask for? Highly recommended!',
                rating: 5,
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
              },
              {
                name: 'Emily Davis',
                role: 'Interior Designer',
                text: 'I love the curated selection and attention to detail. Every item feels special and well-crafted. Amazing experience!',
                rating: 5,
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-xl mb-8 text-blue-100">
              Subscribe to get exclusive deals, new arrivals, and insider updates
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-white/50"
                />
                <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-4">
                Join 50,000+ subscribers. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover your next favorite product today
          </p>
          <Link
            href="/items"
            className="inline-flex items-center bg-white text-gray-900 px-10 py-5 rounded-lg font-semibold hover:bg-gray-100 transition shadow-xl text-lg"
          >
            Browse Our Collection
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
