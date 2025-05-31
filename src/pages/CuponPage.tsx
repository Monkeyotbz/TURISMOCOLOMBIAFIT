import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { supabase } from '../supabaseClient';

const CuponPage = () => {
  const { code } = useParams();
  const [cupon, setCupon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCupon = async () => {
      const { data } = await supabase
        .from('coupons')
        .select('code, used, user_id')
        .eq('code', code)
        .single();
      setCupon(data);
      setLoading(false);
    };
    if (code) fetchCupon();
  }, [code]);

  if (loading) return <div className="text-center mt-10">Cargando cupón...</div>;
  if (!cupon) return <div className="text-center mt-10 text-red-600">Cupón no encontrado.</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4 text-green-700">¡Felicidades!</h1>
        <p className="mb-4">
          Este es tu cupón exclusivo del <b>10% de descuento</b> en tu primera reservación.
        </p>
        <div className="mb-4 flex justify-center">
          <QRCode value={window.location.href} size={180} />
        </div>
        <div className="mb-2 font-mono text-lg">{cupon.code}</div>
        <p className="text-gray-500 text-sm">Muestra este QR o código al reservar.</p>
      </div>
    </div>
  );
};

export default CuponPage;