// filepath: c:\PROGRAMACION GABRIEL CARVAJAL\TurismoColombia\project\src\components\ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza el scroll al inicio
  }, [pathname]);

  return null;
};

export default ScrollToTop;