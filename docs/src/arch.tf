# Define the VPC
resource "aws_vpc" "tesla" {
  cidr_block = "10.0.0.0/16"
  tags = {
    Name = "tesla"
  }
}

# Define the subnet
resource "aws_subnet" "automated_driving" {
  vpc_id                  = aws_vpc.tesla.id
  cidr_block              = "10.0.0.0/24"
  availability_zone       = "eu-west-1a"
  map_public_ip_on_launch = true
  tags = {
    Name = "Automated Driving"
  }
}

# Define the NAT gateway
resource "aws_nat_gateway" "nat_gateway" {
  subnet_id = aws_subnet.automated_driving.id
  tags = {
    Name = "NAT Gateway"
  }
}

# Define the Internet gateway
resource "aws_internet_gateway" "internet_gateway" {
  vpc_id = aws_vpc.tesla.id
  tags = {
    Name = "Internet Gateway"
  }
}

# Define the ECS cluster
resource "aws_ecs_cluster" "self_driving_predictions" {
  name = "self-driving-predictions"
}

# Define the ECS service
resource "aws_ecs_service" "self_driving_predictions" {
  name            = "self-driving-predictions"
  cluster         = aws_ecs_cluster.self_driving_predictions.id
  task_definition = "arn:aws:ecs:eu-west-1:123456789012:task-definition/self-driving-predictions:latest"
  desired_count   = 1
  launch_type     = "FARGATE"
  network_configuration {
    subnets = [aws_subnet.automated_driving.id]
  }
}
