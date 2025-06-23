
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
    // Handle password reset logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-red/5 to-medical-blue/5">
      <Navbar />
      
      <div className="flex items-center justify-center px-4 py-16">
        <Card className="w-full max-w-md shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-medical-red p-3 rounded-full">
                <Heart className="h-8 w-8 text-white" fill="currentColor" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">
              {isSubmitted ? 'Check Your Email' : 'Forgot Password?'}
            </CardTitle>
            <CardDescription>
              {isSubmitted
                ? "We've sent a password reset link to your email address"
                : 'Enter your email address and we\'ll send you a link to reset your password'
              }
            </CardDescription>
          </CardHeader>

          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full medical-gradient text-white">
                  Send Reset Link
                </Button>

                <div className="text-center">
                  <Link
                    to="/login"
                    className="inline-flex items-center text-sm text-medical-red hover:text-medical-red-dark font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Login
                  </Link>
                </div>
              </form>
            ) : (
              <div className="space-y-6 text-center">
                <div className="bg-medical-green/10 border border-medical-green/20 rounded-lg p-4">
                  <p className="text-medical-green-dark">
                    Password reset instructions have been sent to <strong>{email}</strong>
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Didn't receive the email? Check your spam folder or try again.
                  </p>

                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="w-full"
                  >
                    Try Different Email
                  </Button>

                  <Link
                    to="/login"
                    className="inline-flex items-center text-sm text-medical-red hover:text-medical-red-dark font-medium"
                  >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Login
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
