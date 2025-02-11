variable "region" {
  description = "The AWS region to deploy resources in"
  default     = "us-east-1"
}

variable "project_name" {
  description = "The name of the project, used as a prefix for all resources"
  type        = string
}

variable "environment" {
  description = "The environment (dev/staging/prod)"
  type        = string
}

variable "domain_name" {
  description = "The domain name for the website"
  type        = string
}

variable "route53_zone_id" {
  description = "The Route 53 zone ID for the domain"
  type        = string
}

variable "backend_config" {
  description = "Backend configuration for storing terraform state"
  type = object({
    bucket = string
    key    = string
    region = string
  })
}

variable "tags" {
  description = "Common tags for all resources"
  type        = map(string)
  default     = {}
}
