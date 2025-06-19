from fastapi import APIRouter
from app.models.risk import classify_risk, RiskCheckRequest

router = APIRouter()

@router.get("/")
def root():
    return {"message": "API is running"}

@router.post("/risk-check")
def check_risk(data: RiskCheckRequest):
    risk = classify_risk(data.latitude, data.longitude)
    return {
        "latitude": data.latitude,
        "longitude": data.longitude,
        "risk_level": risk
    }
