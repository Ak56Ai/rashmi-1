'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover-lift image-zoom">
      {/* Product Image */}
      <div className="relative aspect-w-16 aspect-h-12 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 bg-soft-gold text-white px-3 py-1 rounded-full text-xs font-medium">
            {product.badge}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
        >
          <Heart 
            className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'} transition-colors duration-300`}
          />
        </button>

        {/* Quick Add to Cart - Visible on Hover */}
        <div className="absolute inset-0 bg-forest-green/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="bg-soft-gold hover:bg-soft-gold/90 text-forest-green font-semibold rounded-full transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-soft-gold font-medium">{product.category}</span>
        </div>

        <h3 className="text-lg font-playfair font-semibold text-forest-green mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-forest-green">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="border-forest-green text-forest-green hover:bg-forest-green hover:text-white rounded-full"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}