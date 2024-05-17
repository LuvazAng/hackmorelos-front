import React, { useState } from "react";
import "./MoodTracker.css"; // Importamos el archivo CSS

function MoodTracker() {
  const [mood, setMood] = useState("");
  const [activities, setActivities] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleActivitiesChange = (event) => {
    const value = event.target.value;
    setActivities(
      activities.includes(value)
        ? activities.filter((activity) => activity !== value)
        : [...activities, value]
    );
  };

  const handleFoodTypesChange = (event) => {
    const value = event.target.value;
    setFoodTypes(
      foodTypes.includes(value)
        ? foodTypes.filter((food) => food !== value)
        : [...foodTypes, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      mood,
      activities,
      foodTypes,
    });
    // Aquí puedes manejar el envío de datos al backend o a un servicio
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md w-full max-w-lg mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">¿Cómo te sentiste hoy?</h2>
          <div className="flex justify-around">
            {["Muy mal", "Mal", "Normal", "Feliz", "Alegre"].map((moodOption) => (
              <label key={moodOption} className={`mood-option ${mood === moodOption ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="mood"
                  value={moodOption}
                  onChange={handleMoodChange}
                />
                {moodOption}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">¿Qué actividades realizaste hoy?</h2>
          <div className="flex flex-wrap">
            {[
              "Salir a un cafe",
              "Salir a un bar",
              "Trabajar",
              "No salí",
              "Salir de compras",
              "Ir al gimnasio",
              "Caminar",
              "Correr",
              "Andar en bicicleta",
              "Limpiar la casa",
              "Hacer Yoga",
              "Meditar",
              "Leer libro",
              "Ver una película/serie",
              "Tomar una siesta",
              "Dibujar",
              "Bailar",
              "Nadar",
              "Ir a un concierto",
              "Fumar",
              "Comer en exceso",
              "Aislarme socialmente"
            ].map((activity) => (
              <label
                key={activity}
                className={`activity-option ${activities.includes(activity) ? 'selected' : ''} mr-4 mb-2`}
              >
                <input
                  type="checkbox"
                  value={activity}
                  onChange={handleActivitiesChange}
                />
                {activity}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">¿Qué tipo de comida ingeriste?</h2>
          <div className="flex flex-wrap">
            {[
              "Desayuno",
              "Almuerzo",
              "Cena",
              "Snacks",
              "Postres",
              "Bebidas",
              "Comida rápida",
              "Comida internacional",
              "Comida saludable"
            ].map((food) => (
              <label
                key={food}
                className={`food-option ${foodTypes.includes(food) ? 'selected' : ''} mr-4 mb-2`}
              >
                <input
                  type="checkbox"
                  value={food}
                  onChange={handleFoodTypesChange}
                />
                {food}
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default MoodTracker;
