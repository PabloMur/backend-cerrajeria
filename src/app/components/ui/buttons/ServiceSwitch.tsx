"use client";

import { useEffect, useState } from "react";

const ServiceSwitch = () => {
  const [servicioActivo, setServicioActivo] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  // Traer estado inicial al montar el componente
  useEffect(() => {
    const fetchEstado = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/service");
        const data = await res.json();
        setServicioActivo(data.data?.servicio ?? false);
      } catch (err) {
        console.error("Error al traer el estado:", err);
      }
    };

    fetchEstado();
  }, []);

  const toggleServicio = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/api/service", { method: "PUT" });
      const data = await res.json();
      setServicioActivo(data.servicio);
    } catch (err) {
      console.error("Error al actualizar el servicio:", err);
    } finally {
      setLoading(false);
    }
  };

  if (servicioActivo === null) return <div>Cargando...</div>;

  return (
    <button
      onClick={toggleServicio}
      disabled={loading}
      className={`px-4 py-2 rounded ${
        servicioActivo ? "bg-green-500" : "bg-red-500"
      } text-white font-bold flex items-center justify-center gap-2`}
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      )}
      {loading ? "Actualizando..." : servicioActivo ? "Servicio Activo ✅" : "Servicio Inactivo ❌"}
    </button>
  );
};

export default ServiceSwitch;
