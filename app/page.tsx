import Navbar from '@/components/ui/navbar';
import HeroSection from '@/components/ui/hero-section';
import CategoriesSection from '@/components/ui/categories-section';
import FeaturedProducts from '@/components/ui/featured-products';
import BrandStory from '@/components/ui/brand-story';
import WhyChoose from '@/components/ui/why-choose';
import Testimonials from '@/components/ui/testimonials';
import Newsletter from '@/components/ui/newsletter';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <BrandStory />
      <WhyChoose />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}