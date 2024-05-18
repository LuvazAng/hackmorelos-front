from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# mmap_mode=None
modelo = joblib.load('brain_stroke.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    gender = data['sexo']
    age = data['edad']
    height = data['altura']
    weight = data['peso']
    bmi = data['bmi']
    smoking = data['fumador']
    alcohol = data['alcohol']
    activity = data['active']

    smoking_level = 0
    if smoking == 1:
        smoking_level = 3

    features_brain_stroke = data[gender, age, bmi, smoking_level]
    prediction_brain_stroke = modelo.predict([features_brain_stroke])

    #ver actividad
    features_cardiovascular_disease = data[age, gender, height, weight, smoking, alcohol, activity]
    prediction_cardiovascular_disease = modelo.predict([features_cardiovascular_disease])

    features_lung_cancer = data[gender, age, smoking, alcohol]
    prediction_lung_cancer = modelo.predict([features_lung_cancer])

    features_obesity = data[age, gender, height, weight, bmi]
    prediction_obecity = modelo.predict([features_obesity])
    
    return jsonify(
        {'Predicción de infarto cerebral': prediction_brain_stroke.tolist()}, 
        {'Predicción de enfermedades cardiovasculares': prediction_cardiovascular_disease.tolist()},
        {'Predicción de cáncer de pulmón': prediction_lung_cancer.tolist()},
        {'Predicción de obesidad': prediction_obecity.tolist()}
        )

if __name__ == '__main__':
    app.run(debug=True)
