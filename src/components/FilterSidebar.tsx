import React, { useState } from 'react';
import { Sliders, X } from 'lucide-react';

interface FilterSidebarProps {
  onApplyFilters: (filters: FilterState) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export interface FilterState {
  priceRange: [number, number];
  propertyTypes: string[];
  amenities: string[];
  rating: number | null;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ 
  onApplyFilters, 
  isMobile = false,
  onClose
}) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    propertyTypes: [],
    amenities: [],
    rating: null,
  });

  // Available property types for filter
  const propertyTypes = [
    'Hotel', 'Apartamento', 'Villa', 'Resort', 'Cabaña', 'Hostal'
  ];

  // Available amenities for filter
  const amenityOptions = [
    'Wi-Fi', 'Piscina', 'Parqueadero', 'Aire acondicionado', 'Cocina',
    'Gimnasio', 'Spa', 'Acepta mascotas', 'Desayuno incluido', 'Acceso a la playa'
  ];

  const handlePriceRangeChange = (index: number, value: number) => {
    const newPriceRange = [...filters.priceRange] as [number, number];
    newPriceRange[index] = value;
    
    // Make sure min is not greater than max
    if (index === 0 && value > newPriceRange[1]) {
      newPriceRange[1] = value;
    }
    
    // Make sure max is not less than min
    if (index === 1 && value < newPriceRange[0]) {
      newPriceRange[0] = value;
    }
    
    setFilters({
      ...filters,
      priceRange: newPriceRange,
    });
  };

  const handlePropertyTypeChange = (propertyType: string) => {
    const newPropertyTypes = filters.propertyTypes.includes(propertyType)
      ? filters.propertyTypes.filter(type => type !== propertyType)
      : [...filters.propertyTypes, propertyType];
    
    setFilters({
      ...filters,
      propertyTypes: newPropertyTypes,
    });
  };

  const handleAmenityChange = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    
    setFilters({
      ...filters,
      amenities: newAmenities,
    });
  };

  const handleRatingChange = (rating: number) => {
    setFilters({
      ...filters,
      rating: filters.rating === rating ? null : rating,
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
    if (isMobile && onClose) {
      onClose();
    }
  };

  const handleResetFilters = () => {
    setFilters({
      priceRange: [0, 1000],
      propertyTypes: [],
      amenities: [],
      rating: null,
    });
    onApplyFilters({
      priceRange: [0, 1000],
      propertyTypes: [],
      amenities: [],
      rating: null,
    });
  };

  const sidebarClasses = isMobile
    ? 'fixed inset-0 bg-white z-50 overflow-y-auto p-4'
    : 'bg-white rounded-lg shadow-md p-5 w-full h-full overflow-y-auto';

  return (
    <div className={sidebarClasses}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <Sliders className="w-5 h-5 mr-2" />
          Filtros
        </h3>
        {isMobile && onClose && (
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        )}
      </div>
      
      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Rango de precio (por noche)</h4>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">
            ${filters.priceRange[0]}
          </span>
          <span className="text-sm text-gray-500">
            ${filters.priceRange[1]}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="min-price" className="sr-only">Precio mínimo</label>
            <input
              type="number"
              id="min-price"
              min={0}
              max={1000}
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceRangeChange(0, parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Mín"
            />
          </div>
          <div>
            <label htmlFor="max-price" className="sr-only">Precio máximo</label>
            <input
              type="number"
              id="max-price"
              min={0}
              max={2000}
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceRangeChange(1, parseInt(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Máx"
            />
          </div>
        </div>
      </div>
      
      {/* Property Types */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Tipo de propiedad</h4>
        <div className="space-y-2">
          {propertyTypes.map((type) => (
            <div key={type} className="flex items-center">
              <input
                type="checkbox"
                id={`property-type-${type}`}
                checked={filters.propertyTypes.includes(type)}
                onChange={() => handlePropertyTypeChange(type)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`property-type-${type}`} className="ml-2 text-sm text-gray-700">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Rating */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Calificación de huéspedes</h4>
        <div className="flex space-x-2">
          {[5, 4, 3, 2].map((rating) => (
            <button
              key={rating}
              className={`px-3 py-1 rounded-full text-sm ${
                filters.rating === rating
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleRatingChange(rating)}
            >
              {rating}+ <span className="sr-only">estrellas o más</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Amenities */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Servicios</h4>
        <div className="space-y-2">
          {amenityOptions.map((amenity) => (
            <div key={amenity} className="flex items-center">
              <input
                type="checkbox"
                id={`amenity-${amenity}`}
                checked={filters.amenities.includes(amenity)}
                onChange={() => handleAmenityChange(amenity)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor={`amenity-${amenity}`} className="ml-2 text-sm text-gray-700">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="mt-8 space-y-3">
        <button
          onClick={handleApplyFilters}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Aplicar filtros
        </button>
        <button
          onClick={handleResetFilters}
          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Restablecer filtros
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;