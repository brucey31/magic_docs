import erdantic as erd
from magic_docs.models.predictions import Prediction

erd.draw(Prediction, out="docs/prediction_model.png")