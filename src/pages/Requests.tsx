
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Heart, Clock, MapPin, Phone, User, AlertCircle, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Requests = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for blood requests
  const bloodRequests = [
    {
      id: 'REQ001',
      patientName: 'Rajesh Kumar',
      bloodType: 'O+',
      unitsNeeded: 3,
      hospital: 'AIIMS Delhi',
      location: 'New Delhi',
      urgency: 'Critical',
      status: 'Pending',
      requestDate: '2024-01-20',
      contactNumber: '+91 9876543210',
      description: 'Emergency surgery required'
    },
    {
      id: 'REQ002',
      patientName: 'Priya Sharma',
      bloodType: 'A+',
      unitsNeeded: 2,
      hospital: 'Fortis Hospital',
      location: 'Mumbai',
      urgency: 'High',
      status: 'Fulfilled',
      requestDate: '2024-01-19',
      contactNumber: '+91 9876543211',
      description: 'Chemotherapy treatment'
    },
    {
      id: 'REQ003',
      patientName: 'Arjun Patel',
      bloodType: 'B-',
      unitsNeeded: 1,
      hospital: 'Apollo Hospital',
      location: 'Bangalore',
      urgency: 'Medium',
      status: 'In Progress',
      requestDate: '2024-01-18',
      contactNumber: '+91 9876543212',
      description: 'Routine surgery preparation'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-blue-100 text-blue-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Fulfilled': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRequests = bloodRequests.filter(request => {
    const matchesStatus = filterStatus === 'all' || request.status.toLowerCase() === filterStatus.toLowerCase();
    const matchesSearch = request.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.bloodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.hospital.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleApprove = (requestId: string) => {
    console.log('Approved request:', requestId);
    // Handle approval logic here
  };

  const handleReject = (requestId: string) => {
    console.log('Rejected request:', requestId);
    // Handle rejection logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <div className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Blood <span className="text-medical-red">Requests</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Admin Dashboard - Manage and monitor blood donation requests across India
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Search */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-4 items-center">
              <Input
                placeholder="Search by patient name, blood type, or hospital..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-80"
              />
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="fulfilled">Fulfilled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-gray-600">
              Total Requests: {filteredRequests.length}
            </div>
          </div>

          {/* Requests Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredRequests.map((request) => (
              <Card key={request.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center space-x-2">
                        <User className="h-5 w-5 text-medical-red" />
                        <span>{request.patientName}</span>
                      </CardTitle>
                      <CardDescription>Request ID: {request.id}</CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge className={getStatusColor(request.urgency)}>
                        {request.urgency}
                      </Badge>
                      <Badge className={getStatusColor(request.status)}>
                        {request.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Blood Type and Units */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Heart className="h-4 w-4 text-medical-red" />
                        <span className="font-semibold">Blood Type: {request.bloodType}</span>
                      </div>
                      <div className="bg-medical-red/10 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-medical-red">
                          {request.unitsNeeded} units needed
                        </span>
                      </div>
                    </div>

                    {/* Hospital and Location */}
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{request.hospital}, {request.location}</span>
                    </div>

                    {/* Contact */}
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">{request.contactNumber}</span>
                    </div>

                    {/* Request Date */}
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-gray-700">Requested on {request.requestDate}</span>
                    </div>

                    {/* Description */}
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-600">{request.description}</p>
                    </div>

                    {/* Action Buttons */}
                    {request.status === 'Pending' && (
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleApprove(request.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                        <Button
                          onClick={() => handleReject(request.id)}
                          variant="outline"
                          className="flex-1 border-red-300 text-red-600 hover:bg-red-50"
                        >
                          <AlertCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No requests found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Requests;
