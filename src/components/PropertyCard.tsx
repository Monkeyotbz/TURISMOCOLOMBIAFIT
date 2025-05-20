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
  const { id, name, location, price, rating, reviewCount, imageSrc, type, amenities } = property;

  return (
    <Link 
      to={`/property/${id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white bg-opacity-90 px-2 py-1 rounded-md text-xs font-medium">
          {type}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 mr-1 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-700">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex items-center mt-1 text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>
        
        <div className="mt-3">
          <div className="flex flex-wrap gap-1">
            {amenities.slice(0, 3).map((amenity, index) => (
              <span 
                key={index} 
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {amenity}
              </span>
            ))}
            {amenities.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{amenities.length - 3} más
              </span>
            )}
          </div>
        </div>
        
        <div className="flex items-end justify-between mt-4">
          <div>
            <p className="text-lg font-bold text-gray-800">${price}<span className="text-sm font-normal text-gray-500">/noche</span></p>
            <p className="text-xs text-gray-500">{reviewCount} reseñas</p>
          </div>
          <button className="text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-lg transition-colors">
            Ver detalles
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;