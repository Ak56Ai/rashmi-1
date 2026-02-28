import { Metadata } from 'next';
import Image from 'next/image';
import { Leaf, Mountain, Heart, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Pansarika',
  description: 'Learn about Pansarika\'s mission to bring you the finest Himalayan wellness products, sourced sustainably from the pristine mountains.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-6">
                Our
                <span className="block font-medium bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Story
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Born from the pristine peaks of the Himalayas, Pansarika is more than just a brand—
                it's a bridge between ancient wisdom and modern wellness.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-slate-700">Sourced from 3000+ meters altitude</p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg"
                alt="Himalayan mountains"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              To preserve and share the ancient healing traditions of the Himalayas 
              while supporting local communities and sustainable practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Sustainable</h3>
              <p className="text-slate-600">Ethically sourced with respect for nature and local communities.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Mountain className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Authentic</h3>
              <p className="text-slate-600">Pure products from the pristine Himalayan region.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Wellness</h3>
              <p className="text-slate-600">Promoting holistic health and natural healing.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-2">Quality</h3>
              <p className="text-slate-600">Rigorous testing and premium standards for every product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate mx-auto">
            <h2 className="text-3xl font-light text-slate-900 mb-8 text-center">
              The Journey Begins
            </h2>
            
            <p className="text-slate-700 leading-relaxed mb-6">
              High in the Himalayan mountains, where the air is pure and the earth untouched, 
              ancient communities have thrived for centuries using nature's bounty for healing 
              and wellness. These time-tested traditions, passed down through generations, 
              form the foundation of everything we do at Pansarika.
            </p>

            <p className="text-slate-700 leading-relaxed mb-6">
              Our founders, inspired by their own transformative experiences with Himalayan 
              wellness practices, embarked on a mission to make these precious gifts accessible 
              to the world. Working directly with local farmers and traditional healers, 
              we ensure that every product maintains its authentic potency while supporting 
              the communities that nurture these treasures.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Today, Pansarika stands as a testament to the power of nature and tradition, 
              bringing you products that are not just pure and potent, but also carry the 
              wisdom of the mountains and the care of generations who have protected these 
              sacred practices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}