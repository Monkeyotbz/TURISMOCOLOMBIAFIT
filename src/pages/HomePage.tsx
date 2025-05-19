import React from 'react';
import HeroSection from '../components/HeroSection';
import PropertyCard, { PropertyType } from '../components/PropertyCard';
import { ArrowRight, ThumbsUp, BadgePercent, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredProperties: PropertyType[] = [
  {
    id: 1,
    name: 'Ocean View Villa',
    location: 'Bali, Indonesia',
    price: 199,
    rating: 4.9,
    reviewCount: 128,
    imageSrc: 'https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg',
    type: 'Villa',
    amenities: ['Pool', 'Ocean View', 'Wi-Fi', 'Kitchen', 'Air Conditioning']
  },
  {
    id: 2,
    name: 'Mountain Retreat Cabin',
    location: 'Aspen, Colorado',
    price: 149,
    rating: 4.8,
    reviewCount: 95,
    imageSrc: 'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg',
    type: 'Cabin',
    amenities: ['Fireplace', 'Mountain View', 'Wi-Fi', 'Kitchen', 'Parking']
  },
  {
    id: 3,
    name: 'Luxury Penthouse',
    location: 'New York, USA',
    price: 349,
    rating: 4.7,
    reviewCount: 210,
    imageSrc: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
    type: 'Apartment',
    amenities: ['City View', 'Gym', 'Wi-Fi', 'Kitchen', 'Concierge']
  },
  {
    id: 4,
    name: 'Beachfront Resort',
    location: 'Cancun, Mexico',
    price: 249,
    rating: 4.6,
    reviewCount: 176,
    imageSrc: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
    type: 'Resort',
    amenities: ['Beach Access', 'Pool', 'Spa', 'Restaurant', 'Wi-Fi']
  }
];

const destinations = [
  {
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg',
    properties: 214
  },
  {
    name: 'Paris, France',
    image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
    properties: 187
  },
  {
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    properties: 134
  },
  {
    name: 'New York, USA',
    image: 'https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg',
    properties: 251
  }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      {/* Featured Properties */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Featured Properties</h2>
              <p className="text-gray-600 mt-2">Handpicked accommodations for your next adventure</p>
            </div>
            <Link 
              to="/properties" 
              className="flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              View all
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Why Choose Wanderlust</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We offer an exceptional booking experience with exclusive deals and personalized recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">
                We match or beat any competitor's price, ensuring you always get the best deal available.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgePercent className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Exclusive Deals</h3>
              <p className="text-gray-600">
                Access special promotions and discounts you won't find on other booking platforms.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Local Experience</h3>
              <p className="text-gray-600">
                Get insider tips and recommendations from our team of local travel experts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Destinations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Popular Destinations</h2>
              <p className="text-gray-600 mt-2">Explore our most booked locations around the world</p>
            </div>
            <Link 
              to="/destinations" 
              className="flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              View all destinations
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <Link
                key={index}
                to={`/properties?destination=${encodeURIComponent(destination.name)}`}
                className="group rounded-xl overflow-hidden shadow-md relative"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-semibold">{destination.name}</h3>
                  <p className="text-white text-sm opacity-90">{destination.properties} properties</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Get Exclusive Travel Deals</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about special offers, new destinations, and travel tips.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button 
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-blue-200 text-sm mt-4">
            By subscribing, you agree to our privacy policy and consent to receive marketing emails.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;