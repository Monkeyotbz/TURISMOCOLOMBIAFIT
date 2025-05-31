import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import PropertyCard, { PropertyType } from '../components/PropertyCard';
import { ArrowRight, ThumbsUp, BadgePercent, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SubscribeModal from '../components/SubscribeModal';
import AboutCEOSection from '../components/AboutCEOSection';

const featuredProperties: PropertyType[] = [
  {
    id: 1,
    name: 'Hotel Opera Medellín Centro Only Adults',
    location: 'Medellín, Antioquia',
    price: 320,
    rating: 4.9,
    reviewCount: 112,
    imageSrc: '/Hoteles/Opera1.png',
    type: 'Casa',
    amenities: ['Piscina', 'Wi-Fi', 'Aire acondicionado', 'Cocina', 'Patio interior']
  },
  {
    id: 2,
    name: 'Hospedaje rural Jerico Antioquia',
    location: 'Jericó, Antioquia',
    price: 210,
    rating: 4.8,
    reviewCount: 98,
    imageSrc: '/Hoteles/Jerico11.jpg',
    type: 'Apartamento',
    amenities: ['Vista a la ciudad', 'Wi-Fi', 'Gimnasio', 'Cocina', 'Balcón']
  },
  {
    id: 3,
    name: 'Hospedaje Cartagena',
    location: 'Cartagena, Bolívar',
    price: 180,
    rating: 4.7,
    reviewCount: 87,
    imageSrc: '/Cartagena1.1.jpg',
    type: 'Cabaña',
    amenities: ['Acceso a la playa', 'Wi-Fi', 'Aire acondicionado', 'Cocina', 'Terraza']
  },
  {
    id: 4,
    name: 'Alojamiento Jardin Antioquia',
    location: 'Jardin Antioquia',
    price: 400,
    rating: 4.6,
    reviewCount: 150,
    imageSrc: '/Jardin3.png',
    type: 'Resort',
    amenities: ['Piscina', 'Spa', 'Restaurante', 'Wi-Fi', 'Acceso a la playa']
  }
];

const destinations = [
  {
    name: 'Jardin Antioquia',
    image: '/JardinA.jpg',
    properties: 120
  },
  {
    name: 'cartagena, Bolívar', 
    image: '/Cartagena1.3.jpg',
    properties: 98
  },
  {
    name: 'Medellín, Antioquia',
    image: '/Medellin1.jpg',
    properties: 75
  },
  {
    name: 'Jerico Antioquia',
    image: 'Jerico1.jpg',
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
      <AboutCEOSection />
      
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
                <div className="relative w-full h-80">
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

      {/* Valores y galería creativa */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          {/* Valores */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div className="flex flex-col items-center">
              <img src="/mesero.jpeg" alt="Hospitalidad" className="w-45 h-60 object-cover rounded-xl shadow-lg mb-4 border-4 " />
              <h3 className="text-lg font-bold text-center mt-2">Hospitalidad y<br />Servicio al Cliente Excepcionales</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src="/IMG-20240612-WA0039-c67099b.jpg" alt="Autenticidad" className="w-45 h-60 object-cover rounded-xl shadow-lg mb-4 border-4 " />
              <h3 className="text-lg font-bold text-center mt-2">Autenticidad y<br />Experiencias Locales</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src="/IMG-20240112-WA0026.jpg" alt="Planes turísticos" className="w-45 h-60 object-cover rounded-xl shadow-lg mb-4 border-4 " />
              <h3 className="text-lg font-bold text-center mt-2">Planes turísticos<br />flexibles y personalizados</h3>
            </div>
            <div className="flex flex-col items-center">
              <img src="/1720922643823.jpg" alt="Seguridad" className="w-45 h-60 object-cover rounded-xl shadow-lg mb-4 border-4 " />
              <h3 className="text-lg font-bold text-center mt-2">Seguridad y<br />Bienestar del Viajero</h3>
            </div>
          </div>

          {/* Galería creativa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="/1719529276003.jpg" alt="Galería 1" className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
            <img src="/1723057617039.jpg" alt="Galería 2" className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
            <img src="/af8d9fe5-1e30-4208-8f12-92c816c115b2.jpg" alt="Galería 3" className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <img src="/Cartagena1.1.jpg" alt="Galería 4" className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
            <img src="/colombia 🇨🇴.jpg" alt="Galería 5" className="w-full h-64 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </section>

      {/* Sección de oro con slider infinito */}
      <section
        className="py-20 bg-black text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #111 80%, #FFD70022 100%)",
          borderTop: "4px solid #FFD700",
        }}
      >
        <div className="container mx-auto text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{
              color: "#FFD700",
              letterSpacing: "0.12em",
              fontFamily: "'Cinzel', serif",
              textShadow: "0 2px 12px #000, 0 0px 2px #FFD70099",
            }}
          >
            ORO PURO DE COLOMBIA
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre la riqueza ancestral de Colombia a través de nuestro oro autóctono de 18 quilates, trabajado por manos expertas que mantienen vivas las tradiciones indígenas y artesanales.
          </p>
        </div>

        {/* Slider infinito */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex animate-scroll"
            style={{
              animation: "scroll 100s linear infinite",
            }}
          >
            {[...Array(16)].map((_, index) => (
              <img
                key={index}
                src={`/oro${(index % 3) + 1}.jpg`} // Cambia las imágenes según tus archivos
                alt={`Joya de oro ${index + 1}`}
                className="w-64 h-64 object-cover"
              />
            ))}
          </div>
        </div>

        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              display: flex;
              width: 200%; /* Duplicamos el ancho para el efecto infinito */
            }
            .animate-scroll img {
              flex-shrink: 0;
            }
          `}
        </style>
      </section>
    </div>
  );
};

export default HomePage;