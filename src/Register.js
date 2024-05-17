import { React } from "react";
function Register() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-gray-900 to-gray-700">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-80">
        <h2 className="text-2xl mb-6 text-center">Registrarse</h2>
        <form method="POST" className="text-white">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
            Nombre Usuario:
            <input 
            type="text" 
            id="name" 
            className="w-full px-3 py-2 rounded-lg text-gray-900"
            placeholder="Nombre"/>
          </label>
          </div>
          
          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
            Email:
            <input 
            type="text" 
            id="email"
            className="w-full px-3 py-2 rounded-lg text-gray-900"
            placeholder="Correo" />
          </label>
          </div>
          
          <div className="mb-4">
          <label className="block mb-2" htmlFor="password">
            Contraseña:
            <input 
            type="text" 
            id="password" 
            className="w-full px-3 py-2 rounded-lg text-gray-900"
            placeholder="Contraseña"/>
          </label>
          </div>
          
        </form>
      </div>
    </div>
  );
}
export default Register;
