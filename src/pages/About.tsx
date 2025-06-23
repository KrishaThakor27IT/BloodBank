
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Shield, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Save Lives',
      description: 'Every donation can save up to 3 lives and make a lasting impact on families.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of donors helping their local communities every day.'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: '100% safe procedures with strict medical protocols and privacy protection.'
    },
    {
      icon: Award,
      title: 'Recognized Excellence',
      description: 'Award-winning blood bank with the highest safety and efficiency standards.'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Lives Saved' },
    { number: '25,000+', label: 'Active Donors' },
    { number: '500+', label: 'Partner Hospitals' },
    { number: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-medical-red">BloodBank</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to connect blood donors with those in need, ensuring that 
            no one has to suffer due to blood shortage. Join us in saving lives.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                BloodBank was founded with a simple yet powerful vision: to create a world where 
                no one dies due to lack of blood. We bridge the gap between willing donors and 
                those desperately in need of blood transfusions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our platform, we've made blood donation more accessible, efficient, and 
                transparent. Every drop counts, and every donor is a hero in someone's story.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="bg-medical-red/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-medical-red" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Making a Difference</h3>
                <p className="text-gray-600">
                  Since our founding, we've facilitated thousands of donations and saved countless lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-medical-red py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-red-100">See how we're making a difference together</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose BloodBank?</h2>
            <p className="text-xl text-gray-600">We're committed to excellence in every aspect</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
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

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassion</h3>
              <p className="text-gray-600">
                We care deeply about every life and understand the urgency of medical needs.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Our platform ensures consistent, dependable service when you need it most.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our technology to better serve donors and recipients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
