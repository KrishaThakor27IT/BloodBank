
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: 'Easy Registration Process',
      description: 'Simple, quick, and safe registration process for donors and organizations.',
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with a network of donors and healthcare organizations across India.',
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All processes follow strict medical protocols and safety standards.',
    },
    {
      icon: Clock,
      title: '24/7 Platform Access',
      description: 'Access your dashboard and manage your profile anytime, anywhere.',
    },
  ];

  const bloodTypes = [
    { type: 'O+', percentage: '37%', canDonateTo: 'O+, A+, B+, AB+' },
    { type: 'O-', percentage: '7%', canDonateTo: 'All blood types' },
    { type: 'A+', percentage: '36%', canDonateTo: 'A+, AB+' },
    { type: 'A-', percentage: '6%', canDonateTo: 'A+, A-, AB+, AB-' },
    { type: 'B+', percentage: '8%', canDonateTo: 'B+, AB+' },
    { type: 'B-', percentage: '2%', canDonateTo: 'B+, B-, AB+, AB-' },
    { type: 'AB+', percentage: '3%', canDonateTo: 'AB+' },
    { type: 'AB-', percentage: '1%', canDonateTo: 'AB+, AB-' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BloodBank India?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make blood donation management simple, safe, and effective for everyone involved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in">
                  <CardContent className="p-8">
                    <div className="bg-medical-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-medical-red" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Blood Types Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Blood Type Compatibility
            </h2>
            <p className="text-xl text-gray-600">
              Understanding blood types helps save more lives effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bloodTypes.map((blood, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-medical-red mb-2">{blood.type}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{blood.percentage}</div>
                  <div className="text-sm text-gray-600">of population</div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Can donate to:</div>
                    <div className="text-sm font-medium text-gray-700">{blood.canDonateTo}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of heroes across India who are making a difference in their communities. 
            Register today based on your role and start saving lives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="medical-gradient text-white px-8 py-3 text-lg">
                <Heart className="h-5 w-5 mr-2" />
                Register Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-medical-red text-medical-red hover:bg-medical-red hover:text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
