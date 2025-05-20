import React, { useState } from 'react';
import { Search, Calendar, Users } from 'lucide-react';

interface SearchBarProps {
  onSearch: (searchParams: {
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className = '' }) => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      destination,
      checkIn,
      checkOut,
      guests,
    });
  };

  // Calculate min dates for the date inputs
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`bg-white rounded-lg shadow-xl p-4 lg:p-6 max-w-7xl w-full mx-auto ${className}`}
    >
      <div className="flex flex-col md:flex-row md:flex-wrap md:items-end gap-4">
        <div className="flex-1 min-w-[120px]">
          <label htmlFor="destination" className="block text-gray-700 text-lg font-bold mb-2">
            Destino
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ingresa un destino..."
              required
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-[120px]">
          <label htmlFor="check-in" className="block text-gray-700 text-base font-bold mb-2">
            Entrada
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="check-in"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="dd/mm/aaaa"
              required
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-[120px]">
          <label htmlFor="check-out" className="block text-gray-700 text-base font-bold mb-2">
            Salida
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="check-out"
              value={checkOut}
              min={checkIn || formatDate(tomorrow)}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="dd/mm/aaaa"
              required
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-[100px] md:max-w-[130px]">
          <label htmlFor="guests" className="block text-gray-700 text-base font-bold mb-2">
            Personas
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Users className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              required
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'persona' : 'personas'}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-none min-w-[100px] md:max-w-[150px]">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300"
          >
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;