import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface PropertyType {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageSrc: string;
  type: string;
  amenities: string[];
}

interface PropertyCardProps {
  property: PropertyType;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { id, name, location, rating, reviewCount, imageSrc, type, amenities } = property; // Eliminado "price"

  return (
    <Link 
      to={`/property/${id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-md">
        <img
          src={property.imageSrc}
          alt={property.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </Link>
  );
};

export default PropertyCard; 