<<<<<<< HEAD
# Sentinel Fire

**Sentinel Fire** is a wildfire risk monitoring and evacuation support platform built on Microsoft Azure.  
It connects satellite and climate data with real-time input from the population to help decision-makers and communities act faster and more safely.

---

## ⚙️ Features

### 📱 Mobile App
- Location-based wildfire alerts
- Evacuation route guidance
- Community check-in to show where people are safe or still present

### 📊 Power BI Dashboard
- Real-time fire spread and risk visualization
- Live map of citizen check-ins by area
- Identification of critical zones for targeted response

---

## 💻 Tech Stack
- Azure Blob Storage
- Azure Machine Learning 
- Python
- Node.js
- Power BI
- React Native

---

## 🔄 How to Run (Coming soon...)


---

## 📁 Project Structure (Coming soon...)

---

## 📄 License
This project is licensed under the MIT License.  
You can view it here: [LICENSE](https://github.com/carolinaeschholz/sentinel-fire/blob/main/LICENSE)
=======
<!--
Sugestão de versão do README pela Ana (nova estrutura)
Use essa versão se quiser um passo a passo mais claro para rodar o projeto localmente.# Sentinel Fire — Monitoramento Inteligente de Risco de Incêndio Florestal

O Sentinel Fire é uma solução inteligente e acessível de **monitoramento e alerta de risco de incêndios florestais**, desenvolvida durante o Innovation Challenge 2025.

Com base em dados como **localização geográfica, declive e vegetação**, o sistema classifica o risco de incêndio em uma determinada região e visa facilitar decisões rápidas e informadas por parte de moradores e autoridades locais.

---

##  Tecnologias utilizadas

-  Python
-  FastAPI
-  Uvicorn (servidor ASGI)
-  Pydantic
-  Simulação de dados geográficos
-  Testes com `requests`
-  Integração futura com Power BI + App Móvel (React Native)

---

##  Como rodar localmente

1. **Clone o repositório**:
```bash
git clone https://github.com/carolinaeschholz/sentinel-fire.git
cd sentinel-fire-backend
```

2. **Crie e ative o ambiente virtual**:
```bash
python3 -m venv venv
source venv/bin/activate
```

3. **Instale as dependências**:
```bash
pip install -r requirements.txt
```

4. **Inicie o servidor FastAPI**:
```bash
uvicorn main:app --reload
```

5. **Acesse a documentação interativa**:
- Swagger: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- Redoc: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)

---

## Endpoints disponíveis

| Método | Rota           | Descrição                                                  |
|--------|----------------|------------------------------------------------------------|
| GET    | `/`            | Checagem do status da API                                  |
| POST   | `/risk-check`  | Recebe latitude/longitude e retorna classificação de risco |
| POST   | `/risk-history`| (em desenvolvimento) Simulação de histórico de checagens   |

---

## Como testar a API

Crie e rode o arquivo `test_risk_check.py` com o seguinte conteúdo:

```python
import requests

URL = "http://127.0.0.1:8000/risk-check"
payload = {"latitude": 38.0, "longitude": -121.0}

response = requests.post(URL, json=payload)

print("Status Code:", response.status_code)
print("Response JSON:", response.json())
```

---

## Próximas etapas (roadmap)

- Endpoint `/risk-history` para salvar e consultar histórico
- Lógica real com base em dados ambientais (declive, vegetação, históricos)
- Integração com o frontend mobile (React Native)
- Integração com dashboards Power BI
- Envio de alertas para moradores em áreas de risco

---

## Time Sentinel Fire

- **Ana McCullagh** — Backend Developer & Infraestrutura
- **Bevara Praveen**
- **Carlos Alberto**
- **Carolina Moraes**
- **Isabel Silveira**

---

## Contato

Este projeto foi desenvolvido para fins acadêmicos e demonstração técnica.  
Dúvidas ou sugestões? Fale com a gente no GitHub ou por e-mail! -->
>>>>>>> eed11a4 (Initial backend setup with FastAPI and risk-check endpoint)
