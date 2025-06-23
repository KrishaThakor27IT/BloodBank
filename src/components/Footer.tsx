
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-medical-red p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold">BloodBank</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting donors with those in need across India. Your donation can save lives and make a real difference in your community.
            </p>
            <p className="text-sm text-gray-400">
              Serving communities across India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-300 hover:text-white transition-colors">
                  Join Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-medical-red" />
                <span className="text-gray-300">info@bloodbank.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-medical-red" />
                <span className="text-gray-300">India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 BloodBank India. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
