terraform {
  required_version = ">= 1.0.0"

  backend "s3" {
    bucket = var.backend_config.bucket
    key    = var.backend_config.key
    region = var.backend_config.region
    encrypt = true
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = var.region

  default_tags {
    tags = var.tags
  }
}
