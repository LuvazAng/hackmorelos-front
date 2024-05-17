import { React } from "react";
function Register() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-b from-gray-900 to-gray-700">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-80">
        <h2>Registrarse</h2>
        <form method="POST" className="text-white">
          <label htmlFor="name">
            Nombre Usuario:
            <input type="text" id="name" />
          </label>

          <label htmlFor="email">
            Email:
            <input type="text" id="email" />
          </label>

          <label htmlFor="password">
            Contrasena:
            <input type="text" id="password" />
          </label>
        </form>
      </div>
    </div>
  );
}
export default Register;
