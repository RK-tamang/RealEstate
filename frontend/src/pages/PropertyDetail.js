import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "../data/properties";
import {
  MapPinIcon,
  HomeIcon,
  BuildingOffice2Icon,
  Squares2X2Icon,
  HeartIcon,
  ShareIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h2>
          <Link to="/properties" className="btn-primary">
            Back to Properties
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p">
        <div className="flex flex-wrap -mx-4 mb-6"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                to="/properties"
                className="text-gray-500 hover:text-gray-700"
              >
                Properties
              </Link>
            </li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{property.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="h-5 w-5 mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary-600">
                    {formatPrice(property.price)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Est. ${Math.round(property.price / property.area)}/sq ft
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <HomeIcon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <p className="text-sm text-gray-600">Bedrooms</p>
                  <p className="font-semibold">{property.bedrooms}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <BuildingOffice2Icon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <p className="text-sm text-gray-600">Bathrooms</p>
                  <p className="font-semibold">{property.bathrooms}</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Squares2X2Icon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <p className="text-sm text-gray-600">Area</p>
                  <p className="font-semibold">{property.area} sq ft</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <CalendarIcon className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-semibold">{property.type}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">
                    {property.agent.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    Real Estate Professional
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center text-gray-600 hover:text-primary-600"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    <span>{property.agent.phone}</span>
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center text-gray-600 hover:text-primary-600"
                  >
                    <EnvelopeIcon className="h-5 w-5 mr-2" />
                    <span>{property.agent.email}</span>
                  </a>
                </div>

                <button className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors">
                  Schedule Tour
                </button>

                <div className="flex space-x-2">
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <HeartIcon className="h-5 w-5 inline mr-1" />
                    Save
                  </button>
                  <button 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: property.title,
                          text: `Check out this ${property.type} at ${property.location}`,
                          url: window.location.href
                        }).catch(console.error);
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert('Link copied to clipboard!');
                      }
                    }}
                    className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ShareIcon className="h-5 w-5 inline mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Property Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-semibold">
                    {formatPrice(property.price)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-semibold">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms</span>
                  <span className="font-semibold">{property.bedrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms</span>
                  <span className="font-semibold">{property.bathrooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Area</span>
                  <span className="font-semibold">{property.area} sq ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
