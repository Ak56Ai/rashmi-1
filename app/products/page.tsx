import { getAllProducts } from '@/lib/supabaseClient';
import ProductGrid from '@/components/ui/product-grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Products - Pansarika',
  description: 'Discover our complete collection of premium Himalayan wellness products, herbs, spices, teas, and essential oils.',
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-6">
            Our Complete
            <span className="block font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Collection
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the finest selection of Himalayan wellness products, 
            carefully sourced and crafted for your holistic well-being.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-600 text-lg">No products available at the moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}