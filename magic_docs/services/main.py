from fastapi import FastAPI, HTTPException
import uvicorn
from typing import List
from random import choice
from enum import Enum

app = FastAPI()

class PredictionChoices(Enum):
    LEFT = "Left"
    RIGHT = "Right"
    STOP = "Stop"
    START = "Start"

@app.get("/predictions")
async def predictions(car_id: int, telemetry_data: List[List[float]]):
    """Takes in telemetry data from a given Tesla car and then outputs what the next move for the car should be

    Args:
        car_id (int): _description_
        telemetry_data (List[List[float]]): An multi-dimentional array of telemetry data from the car & what it sees

    Returns:
        car_id: ID of the car
        next_turn: The result of the prediction engine based on PredictionChoices Enum
    """
    print(telemetry_data)
    return {"car_id": car_id, "next_turn": choice(list(PredictionChoices)).value}

@app.get("/healthcheck")
async def healthcheck():
    return {"status": "ok"}


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)