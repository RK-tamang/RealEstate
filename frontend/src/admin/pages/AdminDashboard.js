import React, { useState, useEffect } from 'react';
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  HomeModernIcon,
  EnvelopeIcon,
  CheckCircleIcon,
  EyeIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    name: 'Total Properties',
    stat: '24',
    icon: HomeModernIcon,
    change: '12%',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'Active Users',
    stat: '89',
    icon: UserGroupIcon,
    change: '5%',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'Pending Approvals',
    stat: '7',
    icon: ChartBarIcon,
    change: '2%',
    changeType: 'decrease',
  },
  {
    id: 4,
    name: 'Revenue',
    stat: '$45,231',
    icon: CurrencyDollarIcon,
    change: '18%',
    changeType: 'increase',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showMessageModal, setShowMessageModal] = useState(false);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    setMessages(savedMessages);
  }, []);

  const markAsRead = (messageId) => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId ? { ...msg, read: true } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  };

  const deleteMessage = (messageId) => {
    const updatedMessages = messages.filter(msg => msg.id !== messageId);
    setMessages(updatedMessages);
    localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  };

  const openMessage = (message) => {
    setSelectedMessage(message);
    setShowMessageModal(true);
    if (!message.read) {
      markAsRead(message.id);
    }
  };

  const unreadCount = messages.filter(msg => !msg.read).length;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8">Dashboard</h1>
      
      {/* Stats Grid */}
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-indigo-500 rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <svg
                    className="self-center flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 011.414 0L10 13.586l3.293-3.879a1 1 0 111.414 1.414l-4 4.707a1 1 0 01-1.414 0l-4-4.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="self-center flex-shrink-0 h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.293a1 1 0 00-1.414 0L10 13.586 6.707 10.293a1 1 0 00-1.414 1.414l4 4.707a1 1 0 001.414 0l4-4.707a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                <span className="sr-only">
                  {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by {item.change}
                </span>
                {item.change}
              </p>
            </dd>
          </div>
        ))}
      </dl>

      {/* Messages Section */}
      <div className="mt-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900 flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                Contact Messages
                {unreadCount > 0 && (
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {unreadCount} new
                  </span>
                )}
              </h2>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {messages.length === 0 ? (
              <div className="px-6 py-12 text-center">
                <EnvelopeIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No messages</h3>
                <p className="mt-1 text-sm text-gray-500">
                  No contact messages have been submitted yet.
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <h3 className="text-sm font-medium text-gray-900">
                          {message.name}
                        </h3>
                        {!message.read && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                            New
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{message.subject}</p>
                      <p className="text-xs text-gray-500 mt-1">{message.date}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => openMessage(message)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                        title="View message"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => deleteMessage(message.id)}
                        className="p-1 text-gray-400 hover:text-red-600"
                        title="Delete message"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && selectedMessage && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  Message from {selectedMessage.name}
                </h3>
                <button
                  onClick={() => setShowMessageModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="px-6 py-4">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">From</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedMessage.name} ({selectedMessage.email})</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedMessage.phone || 'Not provided'}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedMessage.subject}</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded">
                    {selectedMessage.message}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <p className="mt-1 text-sm text-gray-500">{selectedMessage.date}</p>
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                onClick={() => setShowMessageModal(false)}
              >
                Close
              </button>
              {!selectedMessage.read && (
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  onClick={() => {
                    markAsRead(selectedMessage.id);
                    setShowMessageModal(false);
                  }}
                >
                  <CheckCircleIcon className="h-4 w-4 mr-2" />
                  Mark as Read
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Properties</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-4 flex justify-between">
              <span>Modern Villa</span>
              <span className="text-sm text-gray-500">$450,000</span>
            </li>
            <li className="py-4 flex justify-between">
              <span>City Apartment</span>
              <span className="text-sm text-gray-500">$280,000</span>
            </li>
            <li className="py-4 flex justify-between">
              <span>Suburban House</span>
              <span className="text-sm text-gray-500">$320,000</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <ul className="divide-y divide-gray-200">
            <li className="py-4">
              <span className="text-sm text-gray-500">New property added</span>
            </li>
            <li className="py-4">
              <span className="text-sm text-gray-500">User registration</span>
            </li>
            <li className="py-4">
              <span className="text-sm text-gray-500">Property updated</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
