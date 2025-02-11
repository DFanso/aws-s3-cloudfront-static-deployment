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
  description = "The primary domain name for the website (e.g., example.com)"
  type        = string
}

variable "subdomain" {
  description = "The subdomain for the website (e.g., www, app, etc.)"
  type        = string
  default     = "www"
}

variable "alternative_domains" {
  description = "List of alternative domain names (e.g., example.com if www.example.com is primary)"
  type        = list(string)
  default     = []
}

variable "route53_zone_id" {
  description = "The Route 53 zone ID for the domain"
  type        = string
}

variable "dns_ttl" {
  description = "TTL for DNS records"
  type        = number
  default     = 300
}


variable "tags" {
  description = "Common tags for all resources"
  type        = map(string)
  default     = {}
}
