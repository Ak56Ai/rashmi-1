'use client';

import { useEffect, useRef, useState } from 'react';
import ProductCard from './product-card';
import { Button } from '@/components/ui/button';

const featuredProducts = [
  {
    id: 1,
    name: 'Pure Himalayan Shilajit',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.pexels.com/photos/6191428/pexels-photo-6191428.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Himalayan Herbs',
    rating: 5,
    reviews: 128,
    badge: 'Bestseller'
  },
  {
    id: 2,
    name: 'Organic Kashmiri Saffron',
    price: 4999,
    originalPrice: 6499,
    image: 'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Premium Spices',
    rating: 5,
    reviews: 89,
    badge: 'Limited'
  },
  {
    id: 3,
    name: 'Himalayan Pink Salt',
    price: 299,
    image: 'https://images.pexels.com/photos/7426829/pexels-photo-7426829.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Natural Salts',
    rating: 4,
    reviews: 245
  },
  {
    id: 4,
    name: 'Ashwagandha Root Powder',
    price: 599,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/5835255/pexels-photo-5835255.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Ayurvedic Herbs',
    rating: 5,
    reviews: 167
  },
  {
    id: 5,
    name: 'Wild Forest Honey',
    price: 899,
    image: 'https://images.pexels.com/photos/1638754/pexels-photo-1638754.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Natural Sweeteners',
    rating: 5,
    reviews: 203,
    badge: 'Pure'
  },
  {
    id: 6,
    name: 'Turmeric Curcumin Powder',
    price: 449,
    originalPrice: 599,
    image: 'https://images.pexels.com/photos/4198638/pexels-photo-4198638.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Healing Spices',
    rating: 4,
    reviews: 156
  }
];

export default function FeaturedProducts() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('.product-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest-green mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Handpicked premium products that embody the essence of traditional wellness 
            and natural purity.
          </p>
          <Button 
            variant="outline" 
            className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white rounded-full px-8"
          >
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              data-index={index}
              className={`product-item transform transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}