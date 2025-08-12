import React from 'react';
import {
  ChartBarIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const AdminAnalytics = () => {
  const analyticsData = [
    { name: 'Total Views', value: '45,231', change: '+12%', icon: ArrowTrendingUpIcon },
    { name: 'Active Users', value: '2,345', change: '+5%', icon: UsersIcon },
    { name: 'Conversion Rate', value: '3.2%', change: '+0.8%', icon: ChartPieIcon },
    { name: 'Avg. Session', value: '4m 32s', change: '-2%', icon: ChartBarIcon },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Analytics</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {analyticsData.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{item.value}</div>
                      <div className={`ml-2 text-sm font-medium ${item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Traffic Overview</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <div className="text-center">
              <ChartBarIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Traffic Chart Placeholder</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">User Demographics</h2>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <div className="text-center">
              <ChartPieIcon className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Demographics Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        </div>
        <div className="divide-y divide-gray-200">
          <div className="px-6 py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <UsersIcon className="h-4 w-4 text-white" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">Recent Activity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
