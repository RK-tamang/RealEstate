import React from "react";
import { Link } from "react-router-dom";
import aboutBg from "../assets/about.png";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat text-white py-32"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="bg-black bg-opacity-60 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                About RealEstate
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Your Trusted Partner in Real Estate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded in 2010, RealEstate has been helping families and
                individuals find their dream homes for over a decade. We started
                with a simple mission: to make real estate transactions
                transparent, efficient, and enjoyable.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Today, we're proud to be one of the leading real estate
                platforms, connecting thousands of buyers and sellers with their
                perfect properties across the nation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team of experienced professionals is dedicated to providing
                exceptional service and ensuring every client finds exactly what
                they're looking for.
              </p>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Real Estate Team"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To simplify the real estate process by providing innovative
                technology, expert guidance, and exceptional service to help our
                clients achieve their property goals.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and innovative real estate platform,
                making property transactions seamless and accessible for
                everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">What drives us every day</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
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
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We believe in transparency and honesty in all our dealings
              </p>
            </div>

            {/* Value 2 */}
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do
              </p>
            </div>

            {/* Value 3 */}
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
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
              <p className="text-gray-600">
                Our clients' needs are at the center of everything we do
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to find your dream home?
          </h2>
          <p className="text-xl mb-8">
            Let's work together to make your real estate dreams a reality
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
