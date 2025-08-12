import React from 'react';
import {
  DocumentTextIcon,
  ArrowDownTrayIcon,
  FunnelIcon,
} from '@heroicons/react/24/outline';

const AdminReports = () => {
  const reports = [
    { id: 1, name: 'Monthly Sales Report', date: '2024-01-15', type: 'Sales', status: 'Ready' },
    { id: 2, name: 'User Activity Report', date: '2024-01-14', type: 'Analytics', status: 'Ready' },
    { id: 3, name: 'Property Performance Report', date: '2024-01-13', type: 'Properties', status: 'Generating' },
    { id: 4, name: 'Revenue Report Q4 2023', date: '2024-01-12', type: 'Finance', status: 'Ready' },
  ];

  return (
    <div className="p-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold text-gray-900">Reports</h1>
        <button className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          <DocumentTextIcon className="h-4 w-4 mr-2" />
          Generate New Report
        </button>
      </div>

      {/* Filters */}
      <div className="mt-8 bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date Range</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>Last 30 days</option>
              <option>Last 7 days</option>
              <option>Last 24 hours</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Report Type</label>
            <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>All Types</option>
              <option>Sales</option>
              <option>Analytics</option>
              <option>Properties</option>
              <option>Finance</option>
            </select>
          </div>
          <button className="mt-6 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            <FunnelIcon className="h-4 w-4 mr-2" />
            Apply Filters
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="mt-8 bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Available Reports</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {reports.map((report) => (
            <div key={report.id} className="px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{report.name}</h3>
                <p className="text-sm text-gray-500">{report.type} • {report.date}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  report.status === 'Ready' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {report.status}
                </span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ArrowDownTrayIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
