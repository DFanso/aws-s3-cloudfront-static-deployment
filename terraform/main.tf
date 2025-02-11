terraform {
  required_version = ">= 1.0.0"

  backend "s3" {
   bucket = "royal-luxury-award-terraform"
  key    = "static-website/terraform.tfstate"
  region = "us-east-1"
    encrypt = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

# Default provider
provider "aws" {
  region = var.region

  default_tags {
    tags = var.tags
  }
}

# Provider for ACM certificates (must be in us-east-1 for CloudFront)
provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"

  default_tags {
    tags = var.tags
  }
}
