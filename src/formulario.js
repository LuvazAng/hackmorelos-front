import React, { useState } from 'react';


function Formulario() {
  const [sentimiento, setSentimiento] = useState(null);
  const [ejercicio, setEjercicio] = useState(false);
  const [actividadesBuenas, setActividadesBuenas] = useState([]);
  const [actividadesMalas, setActividadesMalas] = useState([]);
  const [peso, setPeso] = useState('');

  const handleSentimientoChange = (valor) => {
    setSentimiento(valor);
  };

  const handleActividadChange = (tipo, actividad) => {
    if (tipo === 'buena') {
      setActividadesBuenas(prev => prev.includes(actividad) ? prev.filter(a => a !== actividad) : [...prev, actividad]);
    } else {
      setActividadesMalas(prev => prev.includes(actividad) ? prev.filter(a => a !== actividad) : [...prev, actividad]);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 rounded-lg shadow-md max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Registro</h2>
  
      {/* Emociones */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-white text-center">¿Cómo te sientes hoy?</h3>
        <div className="flex justify-center space-x-4">
          {[
            { valor: 'Increíble', icono: '😁' },
            { valor: 'Bien', icono: '🙂' },
            { valor: 'Meh', icono: '😐' },
            { valor: 'Mal', icono: '🙁' },
            { valor: 'Terrible', icono: '😖' },
          ].map(opcion => (
            <div key={opcion.valor} className="text-center">
              <button
                className={`px-4 py-2 rounded-full border text-2xl ${sentimiento === opcion.valor ? 'bg-blue-500 text-white' : 'border-gray-300 text-white'}`}
                onClick={() => handleSentimientoChange(opcion.valor)}
              >
                {opcion.icono} 
              </button>
              {sentimiento === opcion.valor && ( 
                <p className="text-white mt-2">{opcion.valor}</p> 
              )}
            </div>
          ))}
        </div>
      </div>
  
      {/* Ejercicio */}
      <div className="mb-6 flex items-center justify-center">
        <input 
          type="checkbox" 
          id="ejercicio" 
          className="sr-only" 
          checked={ejercicio} 
          onChange={() => setEjercicio(!ejercicio)} 
        />
        <label className="flex items-center cursor-pointer" htmlFor="ejercicio">
          <div className="relative">
            <div className={`w-6 h-6 rounded-full border-2 ${ejercicio ? 'bg-blue-500 border-blue-600' : 'bg-white border-gray-300'}`}></div>
            <div className={`absolute inset-0 flex items-center justify-center text-white ${ejercicio ? 'opacity-100' : 'opacity-0'}`}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <span className="ml-3 text-lg font-semibold text-white">¿Hiciste ejercicio hoy?</span>
        </label>
      </div>
  
      {/* Actividades */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2 text-white text-center">Actividades y Hábitos</h3>
        <div className="flex"> 
          <div className="w-1/2 pr-4"> {/* Buenas actividades */}
            <h4 className="text-md font-semibold mb-2 text-white text-center">Buenas</h4>
            <ul>
              {['Alimentación balanceada', 'Hidratación', 'Ejercicio regular', 'Sueño reparador', 'Buena higiene', 'Cuidado preventivo de la salud', 'Salud mental', 'Meditación'].map(actividad => (
                <li key={actividad} className="mb-2"> 
                  <label className="flex items-center cursor-pointer"> 
                    <div className="relative"> 
                      <input 
                        type="checkbox" 
                        id={actividad} 
                        className="sr-only" 
                        checked={actividadesBuenas.includes(actividad)}
                        onChange={() => handleActividadChange('buena', actividad)} 
                      />
                      <div className={`w-5 h-5 border-2 rounded ${actividadesBuenas.includes(actividad) ? 'bg-green-500 border-green-600' : 'bg-white border-gray-300'}`}></div> 
                    </div>
                    <span className="ml-3 text-white">{actividad}</span> 
                  </label>
                </li>
              ))}
            </ul>
          </div>
  
          <div className="w-1/2 pl-4"> {/* Malas actividades */}
            <h4 className="text-md font-semibold mb-2 text-white text-center">Malas</h4>
            <ul>
              {['Drogas', 'Tabaquismo', 'Alcohol', 'Exceso de azúcar', 'Exceso de comida rápida', 'Sedentarismo', 'Abuso de tecnología', 'Juegos compulsivos', 'Cafeina en exceso', 'Adicción al trabajo', 'Falta de sueño'].map(actividad => (
                <li key={actividad} className="mb-2"> 
                  <label className="flex items-center cursor-pointer"> 
                    <div className="relative"> 
                      <input 
                        type="checkbox" 
                        id={actividad} 
                        className="sr-only" 
                        checked={actividadesMalas.includes(actividad)}
                        onChange={() => handleActividadChange('mala', actividad)} 
                      />
                      <div className={`w-5 h-5 border-2 rounded ${actividadesMalas.includes(actividad) ? 'bg-red-500 border-red-600' : 'bg-white border-gray-300'}`}></div> 
                    </div>
                    <span className="ml-3 text-white">{actividad}</span> 
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  
      {/* Peso */}
      <div className="mb-6 flex items-center justify-center">
        <label className="text-lg font-semibold mr-4 text-white" htmlFor="peso">
          Peso (kg):
        </label>
        <input 
          type="number" 
          id="peso" 
          className="border rounded-md px-3 py-2 text-white bg-gray-800"
          value={peso} 
          onChange={(e) => setPeso(e.target.value)} 
        />
      </div>
  
      {/* Botón de envío */}
      <div className="flex justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </div>
    </div>
  );  

}  

export default Formulario;