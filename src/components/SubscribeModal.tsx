import React, { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SubscribeModal: React.FC<Props> = ({ open, onClose }) => {
  const [showAnim, setShowAnim] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setShowAnim(true), 10);
    } else {
      setShowAnim(false);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ${showAnim ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white rounded-2xl shadow-xl max-w-lg w-full p-8 relative transform transition-all duration-300 ${showAnim ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h2 className="text-4xl font-bold text-red-700 text-center mb-4">
          ¡Suscríbete en nuestro blog y obten 50% de descuento en tu primera reservación!
        </h2>
        <p className="text-gray-700 text-center mb-8">
          ¿Quieres ser el primero en obtener nuestros descuentos? Suscríbete y recibe un <b>descuento del 50%</b> en tu primera reservación.
        </p>
        <form className="flex flex-col items-center gap-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-800 text-white font-bold px-8 py-3 rounded-full text-lg transition-colors"
          >
            Quiero suscribirme
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeModal;