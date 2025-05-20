import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // Detecta si estamos en la HomePage
  const isHome = location.pathname === '/';

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

  const isActive = (path: string) => location.pathname === path;

  const linkClasses = (path: string) =>
    `text-lg font-bold transition-colors px-4 ${
      isHome && !isScrolled
        ? isActive(path)
          ? 'text-[#bd0000]'
          : 'text-white hover:text-[#bd0000]'
        : isActive(path)
        ? 'text-[#bd0000]'
        : 'text-gray-800 hover:text-[#bd0000]'
    }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-none mr-8">
            <img
              src="/turismo colombia fit logo-02.png"
              alt="Logo de Turismo Colombia"
              className="h-20 w-auto max-w-[200px] object-contain"
            />
          </Link>

          {/* Menú central */}
          <div className="flex-1 flex justify-center mx-2">
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className={linkClasses('/')}>Home</Link>
              <Link to="/about" className={linkClasses('/about')}>Nosotros</Link>
              <Link to="/tours" className={linkClasses('/tours')}>Tours</Link>
              <Link to="/properties" className={linkClasses('/properties')}>Hospedajes</Link>
              <Link to="/destinations" className={linkClasses('/destinations')}>Destinos</Link>
              <Link to="/blog" className={linkClasses('/blog')}>Blog</Link>
              <div className="relative group">
                <button className={`${linkClasses('/more')} flex items-center`}>
                  Más <span className="ml-1">&#9662;</span>
                </button>
              </div>
            </div>
          </div>

          {/* Botones de sesión */}
          <div className="flex items-center space-x-4 flex-none ml-8">
            <Link
              to="/login"
              className="text-lg font-semibold border-2 border-gray-300 text-gray-800 bg-white rounded-full px-8 py-2 transition-colors duration-200 flex items-center justify-center whitespace-nowrap hover:bg-red-600 hover:text-white hover:border-red-600"
              style={{ minWidth: 180, minHeight: 48 }}
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="text-lg font-semibold bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-2 transition-colors duration-200 flex items-center justify-center whitespace-nowrap"
              style={{ minWidth: 180, minHeight: 48 }}
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute w-full animate-fade-in-down">
          <div className="flex flex-col space-y-4">
            <Link to="/properties" className="text-gray-700 hover:text-[#bd0000] font-medium text-base" onClick={toggleMenu}>
              Hospedajes
            </Link>
            <Link to="/destinations" className="text-gray-700 hover:text-[#bd0000] font-medium text-base" onClick={toggleMenu}>
              Destinos
            </Link>
            <Link to="/deals" className="text-gray-700 hover:text-[#bd0000] font-medium text-base" onClick={toggleMenu}>
              Ofertas
            </Link>
            <hr className="my-2" />
            {isLoggedIn ? (
              <>
                <Link to="/bookings" className="text-gray-700 hover:text-[#bd0000] font-medium" onClick={toggleMenu}>
                  Mis Reservas
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-[#bd0000] font-medium" onClick={toggleMenu}>
                  Perfil
                </Link>
                <button 
                  className="text-left text-gray-700 hover:text-[#bd0000] font-medium flex items-center"
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
                  className="text-[#bd0000] border border-[#bd0000] text-center py-2 rounded-full font-medium"
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