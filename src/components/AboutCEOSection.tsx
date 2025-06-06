// AboutCEOSection.tsx
import React from "react";
import { Link } from "react-router-dom";

const AboutCEOSection = () => (
  <section className="w-full bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-stretch gap-10 p-6 md:p-12">
        {/* Imagen con animación en móvil */}
        <div className="flex-shrink-0 w-full md:w-1/2 h-64 md:h-auto overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 ease-in-out animate-none md:animate-none slide-up-mobile">
          <img
            src="../Ceo.png"
            alt="CEO de turismocolombia en una cascada"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center max-w-2xl text-center md:text-left">
          <p className="text-gray-600 mb-2 text-base md:text-lg">¡Hola!</p>
          <h2 className="text-2xl md:text-2xl font-extrabold text-gray-900 mb-4 leading-tight">
            Soy Johan, CEO de turismocolombia.fit
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            Hace más de 17 años empecé a meterle el alma al turismo en Colombia. Esta no es solo una empresa, es una marca original que nació de un momento bien oscuro en mi vida. Pero vea, de esos bajonazos también salen cosas grandes… y así fue como me inventé esto: como una herramienta para salir adelante y ayudar a otros a vivir lo mismo.
            <br /><br />
            Hoy, gracias a ese impulso, construí una de las marcas con más empuje en el turismo, y encontré una forma muy bacana de hacer que cada persona que confía en nosotros sienta la magia de Colombia de verdad.
            <br /><br />
            Y sabe qué, no es nada del otro mundo: la técnica es sencilla, fácil de usar, pero poderosa. No vendemos paquetes ni destinos, hacemos que la gente se enamore de esta tierra, como yo me volví a enamorar de la vida.
          </p>
          <Link
            to="/blog"
            className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-8 rounded-full transition-colors inline-block"
          >
            Leer más
          </Link>
        </div>
      </div>
    </div>
    {/* Animación para móvil */}
    <style>
      {`
        @media (max-width: 767px) {
          .slide-up-mobile {
            animation: slideUp 0.7s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes slideUp {
            from {
              transform: translateY(60px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }
      `}
    </style>
  </section>
);

export default AboutCEOSection;