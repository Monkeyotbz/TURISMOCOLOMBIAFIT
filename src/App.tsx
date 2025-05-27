import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import BlogPage from './pages/BlogPage';
import NosotrosPage from './pages/NosotrosPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Barra de promoción */}
        <div
          className="w-full bg-red-700 text-white flex items-center justify-center py-2 px-3 text-base font-semibold z-50 fixed top-0 left-0"
          style={{ height: '25px' }} // Altura fija de la barra
        >
          <span className="mr-2 text-xl">🍃</span>
          <span>
            Obtén un <span className="font-bold">50% de descuento en tu primera reservación</span> al
            suscribirte a nuestro Blog
          </span>
          <span className="ml-2 text-xl">🍃🍃</span>
          <a
            href="/suscripcion"
            className="ml-4 underline hover:text-yellow-200 transition-colors font-bold"
          >
            ¡Suscríbete aquí!
          </a>
        </div>
        {/* Ajusta el margen superior del Navbar */}
        <div className="mt-[5px]">
          <Navbar />
        </div>
        <main className="flex-grow mt-[5px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/register" element={<SignupPage />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;