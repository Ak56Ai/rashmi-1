'use client';

import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    id: 1,
    title: 'Himalayan Herbs',
    description: 'Pure medicinal herbs from high altitudes',
    image: 'https://images.pexels.com/photos/4198943/pexels-photo-4198943.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: '120+ Products'
  },
  {
    id: 2,
    title: 'Aromatic Spices',
    description: 'Traditional spices with authentic flavors',
    image: 'https://images.pexels.com/photos/4198643/pexels-photo-4198643.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: '85+ Products'
  },
  {
    id: 3,
    title: 'Wellness Teas',
    description: 'Herbal blends for mind and body',
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: '45+ Products'
  },
  {
    id: 4,
    title: 'Essential Oils',
    description: 'Pure extracts for aromatherapy',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
    products: '30+ Products'
  }
];

export default function CategoriesSection() {
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

    const items = sectionRef.current?.querySelectorAll('.category-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest-green mb-4">
            Explore Our Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of premium herbs, spices, and wellness products 
            sourced from the pristine regions of India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              data-index={index}
              className={`category-item group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift image-zoom transform transition-all duration-700 ${
                visibleItems.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-sm font-medium text-soft-gold mb-1">
                    {category.products}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}