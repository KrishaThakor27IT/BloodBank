
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Calendar, Bell, Activity, MapPin, Building, UserCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dashboard = () => {
  const stats = [
    {
      title: 'My Donations',
      value: '12',
      icon: Heart,
      color: 'text-medical-red',
      bgColor: 'bg-medical-red/10'
    },
    {
      title: 'Profile Status',
      value: 'Active',
      icon: UserCheck,
      color: 'text-medical-blue',
      bgColor: 'bg-medical-blue/10'
    },
    {
      title: 'Next Available',
      value: '15 days',
      icon: Calendar,
      color: 'text-medical-green',
      bgColor: 'bg-medical-green/10'
    },
    {
      title: 'Blood Type',
      value: 'O+',
      icon: Activity,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const recentActivity = [
    {
      date: '2024-01-15',
      type: 'Blood Donation',
      location: 'City Hospital',
      status: 'Completed'
    },
    {
      date: '2024-01-10',
      type: 'Health Checkup',
      location: 'Medical Center',
      status: 'Completed'
    },
    {
      date: '2024-01-05',
      type: 'Profile Updated',
      location: 'Online',
      status: 'Completed'
    }
  ];

  const roleBasedActions = [
    {
      role: 'Donor',
      actions: [
        { title: 'Update Profile', icon: UserCheck, description: 'Keep your donor information current' },
        { title: 'View History', icon: Activity, description: 'Check your donation history' },
        { title: 'Schedule Appointment', icon: Calendar, description: 'Book your next donation' }
      ]
    },
    {
      role: 'Hospital',
      actions: [
        { title: 'Manage Blood Inventory', icon: Heart, description: 'Track blood stock levels' },
        { title: 'Request Blood', icon: Bell, description: 'Submit blood requirement requests' },
        { title: 'Donor Database', icon: Users, description: 'Access registered donor information' }
      ]
    },
    {
      role: 'Organization',
      actions: [
        { title: 'Organize Camps', icon: Building, description: 'Plan blood donation drives' },
        { title: 'Volunteer Management', icon: Users, description: 'Coordinate volunteer activities' },
        { title: 'Report Generation', icon: Activity, description: 'Generate donation reports' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome to Your Dashboard!</h1>
          <p className="text-gray-600 mt-2">Manage your blood donation activities and profile</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-medical-red" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>Your latest activities and updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{activity.type}</div>
                      <div className="text-sm text-gray-600">{activity.location}</div>
                      <div className="text-xs text-gray-500">{activity.date}</div>
                    </div>
                    <div className="px-2 py-1 rounded-full text-xs font-medium bg-medical-green/10 text-medical-green-dark">
                      {activity.status}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Activity
              </Button>
            </CardContent>
          </Card>

          {/* Profile Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-medical-red" />
                <span>Profile Management</span>
              </CardTitle>
              <CardDescription>Keep your information up to date</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Personal Information</h4>
                      <p className="text-sm text-gray-600">Update your basic details</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Medical Information</h4>
                      <p className="text-sm text-gray-600">Blood type and health details</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Update
                    </Button>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Bell className="h-4 w-4 mr-2" />
                Notification Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Role-Based Quick Actions */}
        <div className="space-y-8">
          {roleBasedActions.map((roleSection, roleIndex) => (
            <Card key={roleIndex}>
              <CardHeader>
                <CardTitle>{roleSection.role} Dashboard</CardTitle>
                <CardDescription>Quick actions for {roleSection.role.toLowerCase()} role</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {roleSection.actions.map((action, actionIndex) => {
                    const Icon = action.icon;
                    return (
                      <Button key={actionIndex} variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                        <Icon className="h-6 w-6 text-medical-red" />
                        <div className="text-center">
                          <div className="font-medium">{action.title}</div>
                          <div className="text-xs text-gray-500">{action.description}</div>
                        </div>
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
