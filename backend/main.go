package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/rs/cors"
)

// User representa la estructura del usuario a registrar
type User struct {
	ID         int    `json:"ID"`
	Email      string `json:"Email"`
	Contrasena string `json:"Contrasena"`
	Edad       string `json:"Edad"`
	Sexo       string `json:"Sexo"`
	Al4tura    string `json:"Altura"`
}

// response estructura para enviar la respuesta
type response struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

// registerHandler maneja las solicitudes POST para registrar usuarios
func registerHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Método no permitido", http.StatusMethodNotAllowed)
		return
	}

	var user User
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		http.Error(w, "Error al procesar la solicitud", http.StatusBadRequest)
		return
	}

	// Aquí puedes agregar lógica para guardar el usuario en una base de datos

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response{
		Status:  "success",
		Message: "Usuario registrado exitosamente",
	})
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/register", registerHandler)

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
		AllowedMethods:   []string{"GET", "POST", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type"},
	})
	handler := c.Handler(mux)
	log.Println("Servidor escuchando en el puerto 8080")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
