// AboutCEOSection.tsx
import React from "react";
import { Link } from "react-router-dom"; // Agrega esta línea

const AboutCEOSection = () => (
  <section className="container mx-auto px-20 py-20 flex flex-col md:flex-row items-center gap-2">
    {/* Imagen */}
    <div className="flex-1 flex justify-center">
      <img
        src="../Ceo.png" 
        alt="CEO de turismocolombia en una cascada"
        className="rounded-lg shadow-lg max-w-full md:max-w-xl object-cover"
      />
    </div>
    {/* Texto */}
    <div className="flex-1">
      <p className="text-gray-600 mb-2">¡Hola!</p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Soy Johan, CEO de turismocolombia.fit
      </h2>
      <p className="text-lg text-gray-700 mb-6">
       
       Hace más de 17 años empecé a meterle el alma al turismo en Colombia. Esta no es solo una empresa, es una marca original que nació de un momento bien oscuro en mi vida. Pero vea, de esos bajonazos también salen cosas grandes… y así fue como me inventé esto: como una herramienta para salir adelante y ayudar a otros a vivir lo mismo.

       Hoy, gracias a ese impulso, construí una de las marcas con más empuje en el turismo, y encontré una forma muy bacana de hacer que cada persona que confía en nosotros sienta la magia de Colombia de verdad.

       Y sabe qué, no es nada del otro mundo: la técnica es sencilla, fácil de usar, pero poderosa. No vendemos paquetes ni destinos, hacemos que la gente se enamore de esta tierra, como yo me volví a enamorar de la vida.
      </p>
      <Link
        to="/blog"
        className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-6 rounded-full transition-colors inline-block"
      >
        Leer más
      </Link>
    </div>
  </section>
);

export default AboutCEOSection;