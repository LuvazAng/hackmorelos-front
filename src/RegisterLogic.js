import React, { useState } from "react";

const RegisterView = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Contrasena: "",
    Edad: "",
    Sexo: "",
    Altura: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="mt-10  flex items-start justify-center bg-gradient-to-b from-gray-900 to-gray-700">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-80">
        <h2 className="text-2xl mb-6 text-center">Registrarse</h2>
        <form onSubmit={handleSubmit} className="text-white">
          <div className="mb-4">
            <label className="block mb-2" htmlFor="name">
              Nombre Usuario:
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Nombre"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="email">
              Email:
              <input
                type="text"
                id="email"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Correo"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="password">
              Contraseña:
              <input
                type="text"
                id="password"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Contraseña"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="edad">
              Edad:
              <input
                type="text"
                id="edad"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Edad"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="sexo">
              Sexo:
              <input
                type="text"
                id="sexo"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Sexo"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-2" htmlFor="altura">
              Altura:
              <input
                type="text"
                id="altura"
                className="w-full px-3 py-2 rounded-lg text-gray-900"
                placeholder="Altura"
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="actividades">
              Nivel de actividade fisica:
              <select
                name="Actividad"
                id="actividades"
                className="w-full px-3 py-2.5 rounded-lg text-gray-900 bg-white-border border-gray-300"
              >
                <option value="">Sedentario</option>
                <option value="">Ligera Actividad</option>
                <option value="">Moderada Actividad</option>
                <option value="">Alta actividad</option>
                <option value="">Actividad muy instensa</option>
              </select>
            </label>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded-lg mt-6"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default RegisterView;
