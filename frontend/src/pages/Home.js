import React from "react";
import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";

import heroImg from "../assets/hero.png";

const Home = () => {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden min-h-[90vh] pt-16"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center min-h-[90vh] gap-12 relative z-10">
          {/* Left Content */}
          <div className="space-y-6 pt-16 md:pt-0 max-w-xl z-20 relative text-white">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              The <span className="text-yellow-400">#1 site</span> real estate
              <br />
              professionals trust*
            </h1>
            <p className="text-gray-300 max-w-md">
              From as low as $10 per day with limited time offer discounts.
            </p>
            <a
              href="#properties"
              className="inline-block text-sm font-medium text-yellow-400 hover:underline"
            >
              Browse More Properties →
            </a>
          </div>
        </div>

        {/* Our Services Box */}
        <div className="absolute top-[60%] left-8 bg-white text-black px-6 py-5 rounded shadow-lg w-64 z-20">
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between items-center border-b pb-2">
              01 - Interior Design <span>→</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              02 - Architecture <span>→</span>
            </li>
            <li className="flex justify-between items-center">
              03 - Real Estate <span>→</span>
            </li>
          </ul>
        </div>

        {/* Experience Stats Box */}
        <div
          className="absolute bottom-0 bg-goldenrod-600 text-black flex justify-evenly py-6 z-20 rounded-t-lg"
          style={{ width: "30vw" }}
        >
          <div className="text-center">
            <p className="font-bold text-2xl">680</p>
            <p className="text-sm">Years of Experiences</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">1000</p>
            <p className="text-sm">Properties Sold</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">40+</p>
            <p className="text-sm">Happy Customer</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">200+</p>
            <p className="text-sm">Property Ready</p>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600">
              Handpicked properties just for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600">
              We make finding your dream home simple and enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Search</h3>
              <p className="text-gray-600">
                Find properties quickly with our advanced search filters
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p className="text-gray-600">
                All properties are verified for authenticity and quality
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Get help from our experienced real estate professionals
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
