import React, { useState, useMemo } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import bgpropertiesIMG from '../assets/properties.png';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const propertyTypes = ['all', ...new Set(properties.map(p => p.type))];
  const bedroomOptions = ['all', 1, 2, 3, 4, '5+'];

  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = selectedType === 'all' || property.type === selectedType;

      const matchesBedrooms =
        bedrooms === 'all' ||
        (bedrooms === '5+' ? property.bedrooms >= 5 : property.bedrooms === bedrooms);

      const matchesPrice =
        priceRange === 'all' ||
        (priceRange === '0-500k' && property.price <= 500000) ||
        (priceRange === '500k-1m' && property.price > 500000 && property.price <= 1000000) ||
        (priceRange === '1m+' && property.price > 1000000);

      return matchesSearch && matchesType && matchesBedrooms && matchesPrice;
    });
  }, [searchTerm, selectedType, priceRange, bedrooms]);

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-16"
      style={{ backgroundImage: `url(${bgpropertiesIMG})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-xl">Discover the perfect home from our extensive collection</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by location or property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FunnelIcon className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>

          {showFilters && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                >
                  {propertyTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="all">All Prices</option>
                  <option value="0-500k">Under $500k</option>
                  <option value="500k-1m">$500k - $1M</option>
                  <option value="1m+">Over $1M</option>
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                >
                  {bedroomOptions.map(option => (
                    <option key={option} value={option}>
                      {option === 'all' ? 'Any' : option === '5+' ? '5+' : `${option} beds`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6 text-white">
          <p>
            Showing <span className="font-semibold">{filteredProperties.length}</span> of{' '}
            <span className="font-semibold">{properties.length}</span> properties
          </p>
        </div>

        {/* Property Cards */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No properties found</h3>
            <p className="text-gray-200 mb-4">Try adjusting your search criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setPriceRange('all');
                setBedrooms('all');
              }}
              className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Properties;
