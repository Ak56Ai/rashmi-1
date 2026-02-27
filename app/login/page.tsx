'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-warm-white">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-forest-green hover:text-soft-gold mb-8 transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="text-2xl font-playfair font-bold text-forest-green">Pansarika</div>
              <div className="text-xs text-soft-gold font-medium tracking-wider">
                PURE • TRADITIONAL
              </div>
            </div>
            <h1 className="text-3xl font-playfair font-bold text-forest-green mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-600">
              Sign in to access your wellness journey
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-forest-green font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-2 border-gray-300 focus:border-forest-green focus:ring-forest-green rounded-xl"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-forest-green font-medium">
                Password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="border-gray-300 focus:border-forest-green focus:ring-forest-green rounded-xl pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-forest-green transition-colors duration-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-forest-green focus:ring-forest-green border-gray-300 rounded"
                />
                <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              <Link href="/forgot-password" className="text-sm text-soft-gold hover:text-soft-gold/80 font-medium">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full bg-forest-green hover:bg-forest-green/90 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Sign In
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-warm-white text-gray-500">or continue with</span>
              </div>
            </div>

            {/* Google Sign In */}
            <Button
              type="button"
              variant="outline"
              className="w-full border-gray-300 hover:bg-gray-50 py-3 rounded-xl font-semibold"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </Button>

            {/* Sign Up Link */}
            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <Link href="/signup" className="text-forest-green hover:text-soft-gold font-semibold transition-colors duration-300">
                Create one
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:block flex-1 relative">
        <img
          src="https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&fit=crop"
          alt="Himalayan landscape with traditional herbs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/80 via-forest-green/60 to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
          <div className="max-w-md">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Pansarika
            </h2>
            <p className="text-xl mb-2 text-soft-gold">
              Bringing Himalayan Purity to Your Home
            </p>
            <p className="text-white/80 leading-relaxed">
              Experience the authentic taste of traditional wellness with our 
              premium collection of pure Himalayan herbs and spices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}