import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import PropertyCard, { PropertyType } from '../components/PropertyCard';
import { ArrowRight, ThumbsUp, BadgePercent, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SubscribeModal from '../components/SubscribeModal';

const featuredProperties: PropertyType[] = [
  {
    id: 1,
    name: 'Casa Colonial en el Centro Histórico',
    location: 'Cartagena, Bolívar',
    price: 320,
    rating: 4.9,
    reviewCount: 112,
    imageSrc: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=800',
    type: 'Casa',
    amenities: ['Piscina', 'Wi-Fi', 'Aire acondicionado', 'Cocina', 'Patio interior']
  },
  {
    id: 2,
    name: 'Apartamento Moderno con Vista',
    location: 'Medellín, Antioquia',
    price: 210,
    rating: 4.8,
    reviewCount: 98,
    imageSrc: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&w=800',
    type: 'Apartamento',
    amenities: ['Vista a la ciudad', 'Wi-Fi', 'Gimnasio', 'Cocina', 'Balcón']
  },
  {
    id: 3,
    name: 'Cabaña Frente al Mar',
    location: 'Santa Marta, Magdalena',
    price: 180,
    rating: 4.7,
    reviewCount: 87,
    imageSrc: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=800',
    type: 'Cabaña',
    amenities: ['Acceso a la playa', 'Wi-Fi', 'Aire acondicionado', 'Cocina', 'Terraza']
  },
  {
    id: 4,
    name: 'Resort Todo Incluido',
    location: 'San Andrés, San Andrés y Providencia',
    price: 400,
    rating: 4.6,
    reviewCount: 150,
    imageSrc: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&w=800',
    type: 'Resort',
    amenities: ['Piscina', 'Spa', 'Restaurante', 'Wi-Fi', 'Acceso a la playa']
  }
];

const destinations = [
  {
    name: 'Cartagena, Bolívar',
    image: 'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=800',
    properties: 120
  },
  {
    name: 'Medellín, Antioquia',
    image: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&w=800',
    properties: 98
  },
  {
    name: 'San Andrés, San Andrés y Providencia',
    image: 'https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&w=800',
    properties: 75
  },
  {
    name: 'Santa Marta, Magdalena',
    image: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=800',
    properties: 84
  }
];

const HomePage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000); // 5000 ms = 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SubscribeModal open={showModal} onClose={() => setShowModal(false)} />
      <HeroSection />
      
      {/* Featured Properties */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Propiedades Destacadas</h2>
              <p className="text-gray-600 mt-2">Alojamientos seleccionados para tu próxima aventura</p>
            </div>
            <Link 
              to="/properties" 
              className="flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              Ver todas
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
            <h2 className="text-3xl font-bold text-gray-800">¿Por qué elegir Colombiaturismo.fit?</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Ofrecemos una experiencia de reserva excepcional con ofertas exclusivas y recomendaciones personalizadas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mejor Precio Garantizado</h3>
              <p className="text-gray-600">
                Igualamos o superamos cualquier precio de la competencia, asegurando que siempre obtengas la mejor oferta disponible.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BadgePercent className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ofertas Exclusivas</h3>
              <p className="text-gray-600">
                Accede a promociones y descuentos especiales que no encontrarás en otras plataformas de reservas.
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Experiencia Local</h3>
              <p className="text-gray-600">
                Obtén consejos y recomendaciones de nuestro equipo de expertos locales en viajes.
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
              <h2 className="text-3xl font-bold text-gray-800">Destinos Populares</h2>
              <p className="text-gray-600 mt-2">Explora nuestros destinos más reservados alrededor de Colombia</p>
            </div>
            <Link 
              to="/destinations" 
              className="flex items-center text-blue-600 font-medium hover:text-blue-700"
            >
              Ver todos los destinos
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
                  <p className="text-white text-sm opacity-90">{destination.properties} propiedades</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Recibe Ofertas Exclusivas de Viaje</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro boletín y sé el primero en enterarte de ofertas especiales, nuevos destinos y consejos de viaje.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button 
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Suscribirse
            </button>
          </form>
          
          <p className="text-blue-200 text-sm mt-4">
            Al suscribirte, aceptas nuestra política de privacidad y das tu consentimiento para recibir correos electrónicos de marketing.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;