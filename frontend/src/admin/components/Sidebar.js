import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  BuildingOffice2Icon,
  UsersIcon,
  ChartBarIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const location = useLocation();
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Load messages from localStorage to get unread count
    const savedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    const unread = savedMessages.filter(msg => !msg.read).length;
    setUnreadCount(unread);
  }, []);

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
    { name: 'Properties', href: '/admin/properties', icon: BuildingOffice2Icon },
    { name: 'Users', href: '/admin/users', icon: UsersIcon },
    { name: 'Messages', href: '/admin/messages', icon: EnvelopeIcon, count: unreadCount },
    { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
    { name: 'Reports', href: '/admin/reports', icon: DocumentTextIcon },
    { name: 'Settings', href: '/admin/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="bg-gray-900 w-64 min-h-screen flex flex-col">
      <div className="flex items-center justify-center h-16 bg-gray-800">
        <h1 className="text-white text-xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-5 flex-1 px-2 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                isActive
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              } group flex items-center px-3 py-2 text-sm font-medium rounded-md`}
            >
              <item.icon
                className={`mr-3 h-6 w-6 ${
                  isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
                }`}
                aria-hidden="true"
              />
              {item.name}
              {item.count && item.count > 0 && (
                <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  {item.count}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
