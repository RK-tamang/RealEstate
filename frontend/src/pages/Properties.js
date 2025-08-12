import React, { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import { FunnelIcon, MagnifyingGlassIcon, MapIcon, Squares2X2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import bgpropertiesIMG from "../assets/properties.png";

// Add real coordinates to properties
const propertiesWithCoords = properties.map((property, index) => ({
  ...property,
  lat: 40.7128 + (Math.random() - 0.5) * 0.1, // NYC area with some variation
  lng: -74.0060 + (Math.random() - 0.5) * 0.1,
}));

const Properties = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [bedrooms, setBedrooms] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const mapInstanceRef = useRef(null);

  const propertyTypes = ["all", ...new Set(properties.map((p) => p.type))];
  const bedroomOptions = ["all", 1, 2, 3, 4, "5+"];

  const filteredProperties = useMemo(() => {
    return propertiesWithCoords.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType =
        selectedType === "all" || property.type === selectedType;

      const matchesBedrooms =
        bedrooms === "all" ||
        (bedrooms === "5+"
          ? property.bedrooms >= 5
          : property.bedrooms === bedrooms);

      const matchesPrice =
        priceRange === "all" ||
        (priceRange === "0-500k" && property.price <= 500000) ||
        (priceRange === "500k-1m" &&
          property.price > 500000 &&
          property.price <= 1000000) ||
        (priceRange === "1m+" && property.price > 1000000);

      return matchesSearch && matchesType && matchesBedrooms && matchesPrice;
    });
  }, [searchTerm, selectedType, priceRange, bedrooms]);

  useEffect(() => {
    if (viewMode === "map" && filteredProperties.length > 0) {
      // Ensure DOM is ready
      const timer = setTimeout(() => {
        const mapContainer = document.getElementById('property-map');
        if (mapContainer) {
          // Clean up any existing map instance
          if (mapInstanceRef.current) {
            mapInstanceRef.current.remove();
            mapInstanceRef.current = null;
          }

          // Initialize new map
          const mapInstance = window.L.map('property-map').setView([40.7128, -74.0060], 12);
          
          window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
          }).addTo(mapInstance);

          // Add markers for each property
          filteredProperties.forEach((property) => {
            window.L.marker([property.lat, property.lng])
              .addTo(mapInstance)
              .bindPopup(`
                <div class="p-2">
                  <img src="${property.image}" alt="${property.title}" class="w-full h-32 object-cover rounded mb-2">
                  <h3 class="font-bold text-sm">${property.title}</h3>
                  <p class="text-xs text-gray-600">${property.location}</p>
                  <p class="text-lg font-bold text-yellow-600">$${property.price.toLocaleString()}</p>
                  <button onclick="window.navigateToProperty(${property.id})" class="mt-2 bg-yellow-500 text-white px-3 py-1 rounded text-xs">View Details</button>
                </div>
              `);
          });

          mapInstanceRef.current = mapInstance;
        }
      }, 100);

      return () => {
        if (mapInstanceRef.current) {
          mapInstanceRef.current.remove();
          mapInstanceRef.current = null;
        }
        clearTimeout(timer);
      };
    }
  }, [viewMode, filteredProperties]);

  // Make navigateToProperty available globally for popup buttons
  useEffect(() => {
    window.navigateToProperty = (propertyId) => {
      navigate(`/property/${propertyId}`);
    };
  }, [navigate]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("all");
    setPriceRange("all");
    setBedrooms("all");
  };

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
          <p className="text-xl">
            Discover the perfect home from our extensive collection
          </p>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type === "all" ? "All Types" : type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bedrooms
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                >
                  {bedroomOptions.map((option) => (
                    <option key={option} value={option}>
                      {option === "all"
                        ? "Any"
                        : option === "5+"
                          ? "5+"
                          : `${option} beds`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Results Count and View Toggle */}
        <div className="flex justify-between items-center mb-6 text-white">
          <p>
            Showing{" "}
            <span className="font-semibold">{filteredProperties.length}</span>{" "}
            of <span className="font-semibold">{properties.length}</span>{" "}
            properties
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              <Squares2X2Icon className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`p-2 rounded ${viewMode === "map" ? "bg-yellow-500 text-white" : "bg-gray-700 text-gray-300"}`}
            >
              <MapIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Property Display */}
        {filteredProperties.length > 0 ? (
          <>
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div id="property-map" className="h-[600px] rounded-lg"></div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No properties found
            </h3>
            <p className="text-gray-200 mb-4">
              Try adjusting your search criteria
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Property Details Modal */}
        {/* Removed modal functionality - now redirects to PropertyDetail page */}
      </div>
    </section>
  );
};

export default Properties;
