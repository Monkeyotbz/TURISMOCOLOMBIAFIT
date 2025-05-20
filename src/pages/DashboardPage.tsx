import React, { useState } from "react";

const user = JSON.parse(localStorage.getItem("user") || "{}");

const DashboardPage: React.FC = () => {
  const [section, setSection] = useState("resumen");

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col gap-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold">¡Hola, {user.email || "Usuario"}!</h2>
        </div>
        <button className={`text-left py-2 px-4 rounded ${section === "resumen" ? "bg-red-100 text-red-700 font-bold" : "hover:bg-gray-100"}`} onClick={() => setSection("resumen")}>Resumen</button>
        <button className={`text-left py-2 px-4 rounded ${section === "reservas" ? "bg-red-100 text-red-700 font-bold" : "hover:bg-gray-100"}`} onClick={() => setSection("reservas")}>Reservaciones</button>
        <button className={`text-left py-2 px-4 rounded ${section === "vuelos" ? "bg-red-100 text-red-700 font-bold" : "hover:bg-gray-100"}`} onClick={() => setSection("vuelos")}>Tiquetes de Vuelo</button>
        <button className={`text-left py-2 px-4 rounded ${section === "tours" ? "bg-red-100 text-red-700 font-bold" : "hover:bg-gray-100"}`} onClick={() => setSection("tours")}>Tours</button>
        <button className={`text-left py-2 px-4 rounded ${section === "cuenta" ? "bg-red-100 text-red-700 font-bold" : "hover:bg-gray-100"}`} onClick={() => setSection("cuenta")}>Estado de Cuenta</button>
        <button className={`text-left py-2 px-4 rounded ${section === "perfil" ? "bg-red-100 text-red-700 font-bold" : "hover:bg-gray-100"}`} onClick={() => setSection("perfil")}>Perfil</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {section === "resumen" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Resumen General</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">2</div>
                <div className="text-gray-700">Reservaciones activas</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
                <div className="text-gray-700">Vuelos próximos</div>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">3</div>
                <div className="text-gray-700">Tours reservados</div>
              </div>
            </div>
          </div>
        )}

        {section === "reservas" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Tus Reservaciones</h1>
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">Hotel Caribe</div>
                  <div className="text-gray-600 text-sm">Cartagena, 12-15 Jun 2024</div>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Confirmada</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">Eco Cabaña</div>
                  <div className="text-gray-600 text-sm">Salento, 20-23 Jul 2024</div>
                </div>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Pendiente</span>
              </div>
            </div>
          </div>
        )}

        {section === "vuelos" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Tiquetes de Vuelo</h1>
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">Avianca AV123</div>
                  <div className="text-gray-600 text-sm">Bogotá → Cartagena, 12 Jun 2024, 10:00 AM</div>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs">Check-in disponible</span>
              </div>
            </div>
          </div>
        )}

        {section === "tours" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Tus Tours</h1>
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">Tour Comuna 13</div>
                  <div className="text-gray-600 text-sm">Medellín, 14 Jun 2024, 2:00 PM</div>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">Reservado</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-bold">Tour Tayrona</div>
                  <div className="text-gray-600 text-sm">Santa Marta, 22 Jul 2024, 8:00 AM</div>
                </div>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">Pendiente</span>
              </div>
            </div>
          </div>
        )}

        {section === "cuenta" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Estado de Cuenta</h1>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between mb-2">
                <span>Total pagado:</span>
                <span className="font-bold text-green-700">$1.200.000</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Pagos pendientes:</span>
                <span className="font-bold text-red-700">$200.000</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardPage;