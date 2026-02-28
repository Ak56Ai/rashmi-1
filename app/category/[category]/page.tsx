import { getProductsByCategory } from '@/lib/supabaseClient';
import ProductGrid from '@/components/ui/product-grid';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

const categories = {
  'himalayan-herbs': 'Himalayan Herbs',
  'aromatic-spices': 'Aromatic Spices',
  'wellness-teas': 'Wellness Teas',
  'essential-oils': 'Essential Oils',
  'natural-salts': 'Natural Salts'
};

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryName = categories[params.category as keyof typeof categories];
  
  if (!categoryName) {
    return {
      title: 'Category Not Found - Pansarika',
    };
  }

  return {
    title: `${categoryName} - Pansarika`,
    description: `Explore our premium collection of ${categoryName.toLowerCase()} sourced from the pristine Himalayas.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = categories[params.category as keyof typeof categories];
  
  if (!categoryName) {
    notFound();
  }

  const products = await getProductsByCategory(categoryName);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-6">
            <span className="block font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              {categoryName}
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our premium collection of {categoryName.toLowerCase()} 
            sourced from the pristine Himalayas for your wellness journey.
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
              <p className="text-slate-600 text-lg">
                No {categoryName.toLowerCase()} available at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category,
  }));
}