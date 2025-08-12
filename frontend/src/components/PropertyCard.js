import React from "react";
import { Link } from "react-router-dom";
import {
  HeartIcon,
  MapPinIcon,
  HomeIcon,
  BuildingOffice2Icon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

const PropertyCard = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
            {formatPrice(property.price)}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPinIcon className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <HomeIcon className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <BuildingOffice2Icon className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Squares2X2Icon className="h-4 w-4 mr-1" />
            <span>{property.area} sq ft</span>
          </div>
        </div>

        <Link
          to={`/property/${property.id}`}
          className="w-full bg-primary-600 text-white py-2.5 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 text-center font-medium block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
