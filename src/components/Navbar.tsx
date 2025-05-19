import React, { useState, useEffect } from 'react';
import { Menu, X, User, Search, MapPin, Globe, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const linkClasses = `text-lg font-medium ${
    isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary-light'
  } transition-colors`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-20"> {/* Cambia w-20 por px-4 para más espacio */}
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/public/turismo colombia fit logo-02.png"
              alt="Logo de Turismo Colombia"
              className="h-8 w-auto max-h-20 max-w-[100px] object-contain" // Ajusta el tamaño máximo y mantiene proporción
              style={{ minWidth: 300, minHeight: 120 }}
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`${linkClasses} px-4`}>Home</Link>
            <Link to="/about" className={`${linkClasses} px-4`}>Sobre Nosotros</Link>
            <Link to="/tours" className={`${linkClasses} px-4`}>Tours</Link>
            <Link to="/properties" className={`${linkClasses} px-4`}>Hospedajes</Link>
            <Link to="/destinations" className={`${linkClasses} px-4`}>Destinos</Link>
            <Link to="/blog" className={`${linkClasses} px-4`}>Blog</Link>
            <div className="relative group">
              <button className={`${linkClasses} flex items-center px-4`}>
                Más <span className="ml-1">&#9662;</span>
              </button>
              {/* Aquí puedes agregar un menú desplegable si lo deseas */}
              {/* <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contacto</Link>
                <Link to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Preguntas Frecuentes</Link>
              </div> */}
            </div>
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center space-x-1 bg-white bg-opacity-20 hover:bg-opacity-30 px-5 py-2 rounded-full transition-all">
                  <User className={`h-5 w-5 ${isScrolled ? 'text-primary' : 'text-white'}`} />
                  <span className={`text-sm font-medium ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                    Mi Cuenta
                  </span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block transition-all">
                  <Link to="/bookings" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Mis Reservas
                  </Link>
                  <Link to="/profile" className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Perfil
                  </Link>
                  <button 
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex space-x-3">
                <Link 
                  to="/login" 
                  className={`${linkClasses} border border-current px-4 py-1.5 rounded-full`}
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  to="/signup" 
                  className="px-4 py-1.5 rounded-full text-base font-medium transition-colors"
                  style={{ backgroundColor: '#bd0000', color: '#fff' }}
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
          
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            <Link to="/properties" className="text-gray-700 hover:text-primary font-medium text-base" onClick={toggleMenu}>
              Hospedajes
            </Link>
            <Link to="/destinations" className="text-gray-700 hover:text-primary font-medium text-base" onClick={toggleMenu}>
              Destinos
            </Link>
            <Link to="/deals" className="text-gray-700 hover:text-primary font-medium text-base" onClick={toggleMenu}>
              Ofertas
            </Link>
            <hr className="my-2" />
            {isLoggedIn ? (
              <>
                <Link to="/bookings" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
                  Mis Reservas
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
                  Perfil
                </Link>
                <button 
                  className="text-left text-gray-700 hover:text-primary font-medium flex items-center"
                  onClick={() => {
                    setIsLoggedIn(false);
                    toggleMenu();
                  }}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/login" 
                  className="text-primary border border-primary text-center py-2 rounded-full font-medium"
                  onClick={toggleMenu}
                >
                  Iniciar Sesión
                </Link>
                <Link 
                  to="/signup" 
                  className="text-center py-2 rounded-full font-medium"
                  style={{ backgroundColor: '#bd0000', color: '#fff' }}
                  onClick={toggleMenu}
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;