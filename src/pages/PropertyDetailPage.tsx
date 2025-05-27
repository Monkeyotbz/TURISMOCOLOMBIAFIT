import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  Calendar, 
  Users, 
  Check, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Share,
  Heart,
  MapIcon
} from 'lucide-react';

// Import mock data
import { properties } from '../data/properties';
import { PropertyType } from '../components/PropertyCard';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<PropertyType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  
  // Mock multiple images
  const [images, setImages] = useState<string[]>([]);
  
  // Mock reviews
  const reviews = [
    {
      id: 1,
      author: 'Sarah Johnson',
      date: '2 weeks ago',
      rating: 5,
      comment: 'Absolutely amazing property! The location was perfect, just a few minutes walk to the beach. The interior was clean and beautifully decorated. The host was very responsive and helpful with all our questions. Would definitely stay here again!'
    },
    {
      id: 2,
      author: 'Michael Chen',
      date: '1 month ago',
      rating: 4,
      comment: 'Great place to stay. Very comfortable and spacious. The kitchen was well-equipped and the pool was a nice bonus. My only complaint is that the WiFi was a bit slow at times.'
    },
    {
      id: 3,
      author: 'Emily Rodriguez',
      date: '2 months ago',
      rating: 5,
      comment: 'This place exceeded our expectations! The photos don\'t do it justice. The view from the balcony was breathtaking and the beds were incredibly comfortable. The host provided great recommendations for local restaurants and activities.'
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      const foundProperty = properties.find(p => p.id === Number(id));
      
      if (foundProperty) {
        setProperty(foundProperty);
        
        // Generate mock additional images based on the main image
        const mainImage = foundProperty.imageSrc;
        const additionalImages = [
          '/Hoteles/671115738.jpg',
          '/Hoteles/671116008.jpg',
          '/Hoteles/671963015.jpg',
          '/Hoteles/671115739.jpg',
          
        ];
        
        setImages([mainImage, ...additionalImages]);
      }
      
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 px-4 bg-gray-100 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="animate-pulse">
            <div className="h-[400px] bg-gray-300 rounded-xl mb-8"></div>
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="h-8 bg-gray-300 w-2/3 mb-4 rounded"></div>
              <div className="h-4 bg-gray-200 w-1/3 mb-6 rounded"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 w-5/6 rounded"></div>
                <div className="h-4 bg-gray-200 w-4/6 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="pt-24 pb-16 px-4 bg-gray-100 min-h-screen">
        <div className="container mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/properties"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to All Properties
          </Link>
        </div>
      </div>
    );
  }

  // Calculate total price
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };
  
  const nights = calculateNights();
  const totalPrice = property.price * nights;
  const serviceFee = Math.round(totalPrice * 0.12);
  
  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Format today and tomorrow's date for min values
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="pt-24 pb-16 px-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Property Title & Basic Info */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.name}</h1>
          <div className="flex flex-wrap items-center gap-3 text-gray-700">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-medium">{property.rating.toFixed(1)}</span>
              <span className="mx-1">·</span>
              <span className="text-gray-600">{property.reviewCount} reviews</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-500 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>
        
        {/* Image Gallery */}
        <div className="relative mb-8 rounded-xl overflow-hidden shadow-md">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <img 
              src={images[selectedImageIndex]} 
              alt={property.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button 
            onClick={handleNextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Share className="w-5 h-5 text-gray-700" />
            </button>
            <button className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          
          {/* Image Thumbnails */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  selectedImageIndex === index 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              >
                <span className="sr-only">Image {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:w-2/3">
            {/* Description */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {property.type} in {property.location}
              </h2>
              <p className="text-gray-700 mb-6">
                This beautiful {property.type.toLowerCase()} offers a perfect blend of comfort and style. Located in the heart of {property.location}, you'll be just minutes away from local attractions, dining, and entertainment. The space features modern amenities, stylish decor, and all the comforts of home to ensure a memorable stay.
              </p>
              <hr className="my-6" />
              <h3 className="text-lg font-semibold text-gray-800 mb-3">The space</h3>
              <p className="text-gray-700 mb-4">
                Our {property.type.toLowerCase()} is designed to provide you with a luxurious and comfortable experience. With ample space and attention to detail, you'll find everything you need for a relaxing stay. The property features high-quality furnishings, modern technology, and thoughtful touches to enhance your visit.
              </p>
              <p className="text-gray-700">
                Whether you're traveling for business or pleasure, our {property.type.toLowerCase()} offers the perfect setting for your trip to {property.location}. Enjoy the serene atmosphere, beautiful views, and convenient location.
              </p>
            </div>
            
            {/* Amenities */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Location
              </h2>
              <div className="bg-blue-50 rounded-lg p-4 mb-4 flex items-center gap-3">
                <MapIcon className="w-5 h-5 text-blue-600" />
                <p className="text-blue-700 font-medium">{property.location}</p>
              </div>
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                {/* Placeholder for a map */}
                <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
                  Interactive Map Would Appear Here
                </div>
              </div>
            </div>
            
            {/* Reviews */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <div className="flex items-baseline gap-2 mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Reviews
                </h2>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span className="font-medium text-gray-800">{property.rating.toFixed(1)}</span>
                  <span className="mx-1 text-gray-500">·</span>
                  <span className="text-gray-500">{property.reviewCount} reviews</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="pb-6 border-b border-gray-200 last:border-0">
                    <div className="flex justify-between mb-3">
                      <div>
                        <h3 className="font-medium text-gray-800">{review.author}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-gray-700">{review.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-6 text-blue-600 font-medium hover:text-blue-700">
                Show all {property.reviewCount} reviews
              </button>
            </div>
          </div>
          
          {/* Right Column - Booking */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 flex items-baseline mb-4">
                ${property.price}
                <span className="text-sm font-normal text-gray-500 ml-1">per night</span>
              </h2>
              
              {/* Booking Form */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
                      Check in
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Calendar className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="check-in"
                        min={formatDate(today)}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
                      Check out
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Calendar className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="date"
                        id="check-out"
                        min={checkIn || formatDate(tomorrow)}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Users className="w-5 h-5 text-gray-400" />
                    </div>
                    <select
                      id="guests"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300"
                  disabled={!checkIn || !checkOut}
                >
                  Reserve
                </button>
                <p className="text-center text-sm text-gray-500">
                  You won't be charged yet
                </p>
              </form>
              
              {/* Price Breakdown */}
              {checkIn && checkOut && nights > 0 && (
                <div className="mt-6 space-y-4">
                  <hr />
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">
                        ${property.price} × {nights} {nights === 1 ? 'night' : 'nights'}
                      </span>
                      <span className="text-gray-700">${totalPrice}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Service fee</span>
                      <span className="text-gray-700">${serviceFee}</span>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${totalPrice + serviceFee}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;