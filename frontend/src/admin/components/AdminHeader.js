import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-4">
      <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <button className="relative p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <BellIcon className="h-6 w-6" aria-hidden="true" />
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
        </button>
        <div className="flex items-center space-x-2">
          <UserCircleIcon className="h-8 w-8 text-gray-600" />
          <span className="text-gray-700 font-medium">Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
