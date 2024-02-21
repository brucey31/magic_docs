from diagrams import Diagram, Cluster
from diagrams.aws.network import VPC, PublicSubnet, NATGateway, InternetGateway
from diagrams.aws.compute import ElasticContainerService, ElasticContainerServiceService, ElasticContainerServiceContainer

with Diagram("A secure service to deliver predictions for automated self-driving Tesla Cars ", show=False, outformat="png", filename="docs/AWS_architecture"):
    
    
    nat = NATGateway("NAT")
    internet_gateway = InternetGateway("Internet Gateway")
    
    with Cluster("VPC"):
        vpc = VPC("")
        with Cluster("Subnet"):
            subnet = PublicSubnet("Subnet Automatic Driving")
            with Cluster("ECS"):
                cluster = ElasticContainerService("ECS Cluster")
                with Cluster("ECS Service"):
                    service = ElasticContainerServiceService("Self-Driving predictions")
                    container = ElasticContainerServiceContainer("Prediction Model V2.3")

        vpc >> subnet >> cluster >> service >> container
    internet_gateway >> vpc
    nat >> vpc