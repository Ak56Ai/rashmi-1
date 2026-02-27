'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Signup Form */}
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
              Join Our Community
            </h1>
            <p className="text-gray-600">
              Start your wellness journey with us today
            </p>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-forest-green font-medium">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                  className="mt-2 border-gray-300 focus:border-forest-green focus:ring-forest-green rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-forest-green font-medium">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                  className="mt-2 border-gray-300 focus:border-forest-green focus:ring-forest-green rounded-xl"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-forest-green font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
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
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a strong password"
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

            <div>
              <Label htmlFor="confirmPassword" className="text-forest-green font-medium">
                Confirm Password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm your password"
                  required
                  className="border-gray-300 focus:border-forest-green focus:ring-forest-green rounded-xl pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-forest-green transition-colors duration-300"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-forest-green focus:ring-forest-green border-gray-300 rounded mt-1"
              />
              <Label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <Link href="/terms" className="text-forest-green hover:text-soft-gold font-medium">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-forest-green hover:text-soft-gold font-medium">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-forest-green hover:bg-forest-green/90 text-white py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Create Account
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

            {/* Google Sign Up */}
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
              Sign up with Google
            </Button>

            {/* Sign In Link */}
            <div className="text-center">
              <span className="text-gray-600">Already have an account? </span>
              <Link href="/login" className="text-forest-green hover:text-soft-gold font-semibold transition-colors duration-300">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:block flex-1 relative">
        <img
          src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&fit=crop"
          alt="Traditional Himalayan herbs and spices"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-green/80 via-forest-green/60 to-transparent" />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
          <div className="max-w-md">
            <h2 className="text-4xl font-playfair font-bold mb-4">
              Welcome to Pansarika
            </h2>
            <p className="text-xl mb-2 text-soft-gold">
              Your Gateway to Authentic Wellness
            </p>
            <p className="text-white/80 leading-relaxed">
              Join thousands of customers who trust us for pure, traditional 
              herbs and spices sourced directly from the Himalayas.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-soft-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm">100% Pure & Natural Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-soft-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm">Direct from Himalayan Sources</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-soft-gold rounded-full flex-shrink-0"></div>
                <span className="text-sm">Traditional Wellness Wisdom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}