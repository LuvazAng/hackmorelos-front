import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center text-white">
      <h1 className="text-4xl mb-8">BIENVENIDO A VEDIAG</h1>
      <div className="flex flex-col items-center space-y-4">
        <Link to="/login">
          <button className="w-48 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg">
            Iniciar sesión
          </button>
        </Link>
        <Link to="/register">
          <button className="w-48 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg">
            Registrarse
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
