
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="hero-gradient min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Save Lives Through
              <span className="text-medical-red block">Blood Donation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our community of heroes in India. Your blood donation can save lives 
              and make a lasting impact on families in need across our nation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/signup">
                <Button size="lg" className="medical-gradient text-white px-8 py-3 text-lg w-full sm:w-auto">
                  Join as Donor
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg w-full sm:w-auto border-medical-red text-medical-red hover:bg-medical-red hover:text-white">
                  Access Dashboard
                </Button>
              </Link>
            </div>

            {/* Stats - Removed specific numbers */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-red">∞</div>
                <div className="text-sm text-gray-600">Lives to Save</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-red">🇮🇳</div>
                <div className="text-sm text-gray-600">Serving India</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-red">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl animate-float">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Donate Blood?</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-red/10 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-medical-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Save Lives</h4>
                    <p className="text-gray-600 text-sm">Every donation counts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-blue/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-medical-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Help Community</h4>
                    <p className="text-gray-600 text-sm">Support your local community</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-medical-green/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-medical-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Safe Process</h4>
                    <p className="text-gray-600 text-sm">100% safe and sterile procedures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
