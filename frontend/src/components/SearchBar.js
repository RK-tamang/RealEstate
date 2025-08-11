import React, { useState } from 'react';

const SearchBar = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    type: '',
    priceRange: '',
  });

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={searchData.location}
            onChange={handleChange}
            placeholder="Enter city or area"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select
            name="type"
            value={searchData.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Townhouse">Townhouse</option>
            <option value="Condo">Condo</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
          <select
            name="priceRange"
            value={searchData.priceRange}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">Any Price</option>
            <option value="0-300000">Under $300k</option>
            <option value="300000-500000">$300k - $500k</option>
            <option value="500000-800000">$500k - $800k</option>
            <option value="800000-1000000">$800k - $1M</option>
            <option value="1000000+">Above $1M</option>
          </select>
        </div>
        
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Search Properties
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
