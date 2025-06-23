
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      info: '+91 1800-123-4567',
      description: '24/7 Emergency Blood Request Hotline'
    },
    {
      icon: Mail,
      title: 'Email Address',
      info: 'info@bloodbank.in',
      description: 'We respond within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      info: 'New Delhi, India',
      description: 'Main Blood Bank Coordination Center'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      info: 'Mon-Sun: 24/7 Available',
      description: 'Emergency blood services always available'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-medical-red">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Need emergency blood? Have questions? We're here to help across India 24/7.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-medical-red/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-medical-red" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-700 font-medium">{item.info}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Emergency Notice */}
              <div className="mt-8 p-6 bg-medical-red/10 border border-medical-red/20 rounded-lg">
                <h3 className="font-bold text-medical-red mb-2">Emergency Blood Requests</h3>
                <p className="text-sm text-gray-700">
                  For urgent blood requirements across India, call our emergency hotline immediately. 
                  We have 24/7 staff ready to assist with critical situations in all major cities.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXXXXXXX"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="What is this regarding?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us how we can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full medical-gradient text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about blood donation in India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Who can donate blood in India?</h3>
                <p className="text-gray-600">
                  Healthy adults aged 18-65 weighing at least 45 kg can donate blood. 
                  Must be free from infections and certain medical conditions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How often can I donate?</h3>
                <p className="text-gray-600">
                  You can donate whole blood every 3 months (12 weeks) as per Indian guidelines.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is blood donation safe?</h3>
                <p className="text-gray-600">
                  Yes, blood donation is completely safe. We follow strict Indian medical standards and use sterile equipment.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does donation take?</h3>
                <p className="text-gray-600">
                  The entire process takes about 45-60 minutes, with actual donation taking only 8-10 minutes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What documents do I need?</h3>
                <p className="text-gray-600">
                  Valid government ID (Aadhaar, PAN, Driving License) and basic health information.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I request blood for patients?</h3>
                <p className="text-gray-600">
                  Yes, hospitals and families can request specific blood types through our emergency system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
