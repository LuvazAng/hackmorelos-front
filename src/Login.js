import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-80">
        <h2 className="text-2xl mb-6 text-center">Iniciar sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Correo electrónico</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-lg text-gray-900"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Contraseña</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded-lg text-gray-900"
              placeholder="Contraseña"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              INGRESAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
