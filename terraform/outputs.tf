output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.website.id
  description = "The ID of the CloudFront distribution"
}

output "cloudfront_domain_name" {
  value       = aws_cloudfront_distribution.website.domain_name
  description = "The CloudFront distribution domain name"
}

output "website_urls" {
  value = {
    primary_url = "https://${local.primary_domain}"
    alternative_urls = [for domain in var.alternative_domains : "https://${domain}"]
  }
  description = "The URLs where the website is accessible"
}

output "s3_bucket_name" {
  value       = aws_s3_bucket.website.bucket
  description = "The name of the S3 bucket hosting the website content"
}

output "certificate_domains" {
  value = concat([var.domain_name], local.all_domains)
  description = "Domains covered by the SSL certificate"
}
