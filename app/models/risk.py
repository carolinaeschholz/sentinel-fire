from pydantic import BaseModel

class RiskCheckRequest(BaseModel):
    latitude: float
    longitude: float

def classify_risk(latitude: float, longitude: float) -> str:
    """
    Simula uma classificação de risco de incêndio com base nas coordenadas.
    """
    if latitude > 37 and longitude < -120:
        return "alto"
    elif latitude > 35:
        return "médio"
    else:
        return "baixo"