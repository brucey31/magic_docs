from diagrams import Diagram
from diagrams.c4 import Person, Container, Database, System, SystemBoundary, Relationship
from diagrams.custom import Custom
from urllib.request import urlretrieve

graph_attr = {
    "splines": "spline",
}

with Diagram("C1 Diagram of Tesla Self-Driving Prediction service", direction="TB", graph_attr=graph_attr, show=False, outformat="pdf", filename="docs/c1"):
    customer = Person(
        name="Tesla Driver", description="Some lucky person sitting in his/her new tesla motorcar"
    )
    car = Container(
        name="Tesla Car",
        technology="Electic motor + wheels",
        description="The physical Tesla vehicle hardware",
    )
    
    with SystemBoundary("Tesla Systems"):
        service = Container(
            name="""Tesla Self-Driving service""",
            technology="Python & Musk's unique coding 'skills'",
            description="Provides predictions on the best car control changes based on physical environment",
        )
        
        safety = Container(
            name="Safety restrictions module",
            technology="Fear & lawyers",
            description="Adds any corrections to the predictions if there is any doubt or safety concerns",
        )
        
        
        customer >> Relationship("turns on autopilot") >> car
        car >> Relationship("Interacts with") >> service
        service >> Relationship("Sends predictions to") >> safety
        safety >> Relationship("Informs of next move") >> car