import requests

URL = "http://127.0.0.1:8000/risk-check"

# Coordenadas de exemplo
payload = {
    "latitude": 38.0,
    "longitude": -121.0
}

response = requests.post(URL, json=payload)

print("Status Code:", response.status_code)
print("Response JSON:", response.json())