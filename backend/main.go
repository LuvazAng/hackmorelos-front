package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/rs/cors"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type User struct {
	ID         int    `json:"ID"`
	Nombre     string `json:"Nombre"`
	Email      string `json:"Email"`
	Contrasena string `json:"Contrasena"`
	Edad       string `json:"Edad"`
	Sexo       string `json:"Sexo"`
	Altura     string `json:"Altura"`
}

type response struct {
	Status  string `json:"status"`
	Message string `json:"message"`
}

func insertDb(table string, nombre string, email string, constrasena string, edad string, sexo string, altura string) {
	serverAPI := options.ServerAPI(options.ServerAPIVersion1)

	opts := options.Client().ApplyURI("mongodb+srv://20233tn059:aq23WFyKzWdORev1@hackaton.xajs8la.mongodb.net/?retryWrites=true&w=majority&appName=Hackaton").SetServerAPIOptions(serverAPI)

	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		panic(err)
	}
	defer func() {
		if err = client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()
	if err := client.Database("admin").RunCommand(context.TODO(), bson.D{{"ping", 1}}).Err(); err != nil {
		panic(err)
	}
	fmt.Println("Pinged your deployment. You successfully connected to MongoDB!")

	coll := client.Database("hackaton").Collection(table)
	doc := User{ID: 1, Nombre: nombre, Email: email, Contrasena: constrasena, Edad: edad, Sexo: sexo, Altura: altura}
	result, err := coll.InsertOne(context.TODO(), doc)
	fmt.Printf("Inserted document with _id: %v\n", result.InsertedID)

}

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
	insertDb("User", user.Nombre, user.Email, user.Contrasena, user.Edad, user.Sexo, user.Altura)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response{
		Status:  "success",
		Message: user.Email,
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
