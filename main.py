from fastapi import FastAPI
from app.api.routes import router as api_router

app = FastAPI(
    title="Sentinel Fire API",
    description="""
     **API para Monitoramento de Incêndios em Tempo Real**

    Esta API recebe coordenadas geográficas e retorna a classificação de risco de incêndio (baixo, médio, alto),
    com base em dados simulados e, futuramente, dados reais de sensores e satélites.

    **Funcionalidades atuais:**
    - Verificação de risco por coordenadas
    - Simulação de classificação
    - Retorno estruturado para integração com o app mobile

    **Equipe de desenvolvimento:**
    - Ana McCullagh
    - Bevara Praveen
    - Carlos Alberto
    - Carolina Moraes
    - Isabel Silveira

    Projeto desenvolvido para o Innovation Challenge - Junho 2025 
    """,
    version="1.0.0",
    contact={
        "name": "Equipe Sentinel Fire",
        "url": "https://github.com/carolinaeschholz/sentinel-fire",  
        "email": "sentinelfire.team@email.com",       # ou um e-mail de contato do time
    },
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json"
)

app.include_router(api_router)