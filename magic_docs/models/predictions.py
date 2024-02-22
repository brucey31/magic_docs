from datetime import date
from enum import Enum
from uuid import uuid4

from pydantic import BaseModel, Field


class ModelEnum(str, Enum):
    THREE = "three"
    X = "x"
    Y = "y"
    S = "s"


class CountryEnum(str, Enum):
    US = "us"
    GB = "gb"
    CA = "ca"
    FR = "fr"
    AS = "AS"


class Car(BaseModel):
    id: str = Field(default_factory=lambda: uuid4().hex)
    model: ModelEnum = Field(default=ModelEnum.THREE)
    year: int = Field(..., ge=2015, le=date.today().year)


class Geography(BaseModel):
    country: CountryEnum = Field(default=CountryEnum.US)
    city: str = Field(...)


class InferenceModelVersion(BaseModel):
    major: int = Field(..., gte=0)
    minor: int = Field(..., gte=0)
    revision: int = Field(..., gte=0)
    patch: int = Field(..., gte=0)


class SafetyFlag(BaseModel):
    id: str = Field(default_factory=lambda: uuid4().hex)
    flag: bool = Field(...)


class Prediction(BaseModel):
    car: Car
    geography: Geography 
    inference_model_version: InferenceModelVersion
    safety_flag: SafetyFlag
    prediction: list = Field(...)
