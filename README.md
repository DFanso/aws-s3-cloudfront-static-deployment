# AWS S3 + CloudFront Static Website Deployment

This project provides an automated setup for deploying a static website using AWS S3, CloudFront, and Route53 with SSL/TLS support. The frontend is built with React 19, Tailwind CSS, and Framer Motion.

## Project Structure

```
.
├── frontend/               # React application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── dist/              # Build output
├── terraform/             # Infrastructure as Code
│   ├── main.tf           # Main Terraform configuration
│   ├── variables.tf      # Variable definitions
│   ├── outputs.tf        # Output definitions
│   ├── s3.tf            # S3 bucket configuration
│   ├── cloudfront.tf    # CloudFront distribution
│   ├── acm.tf           # SSL certificate
│   └── route53.tf       # DNS configuration
└── .github/workflows/    # CI/CD pipelines
    └── deploy.yml       # Frontend deployment workflow
```

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI configured
- Node.js 20+
- pnpm 10+
- Terraform 1.0+
- Domain name configured in Route53

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/dfanso/aws-s3-cloudfront-static-deployment.git
   cd aws-s3-cloudfront-static-deployment
   ```

2. **Set up the frontend**
   ```bash
   cd frontend
   pnpm install
   pnpm dev     # Local development
   pnpm build   # Production build
   ```

3. **Configure infrastructure**
   ```bash
   cd terraform
   # Update terraform.tfvars with your values:
   # - domain_name
   # - subdomain
   # - route53_zone_id
   
   terraform init
   terraform plan
   terraform apply
   ```

4. **Configure GitHub Secrets**
   Add the following secrets to your GitHub repository:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `AWS_S3_BUCKET` (from terraform output)
   - `CLOUDFRONT_DISTRIBUTION_ID` (from terraform output)

## Features

- **Frontend**
  - React 19 with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Optimized production builds

- **Infrastructure**
  - S3 bucket with versioning
  - CloudFront distribution with SSL
  - Automatic SSL certificate provisioning
  - DNS configuration with Route53
  - Multi-domain support

- **CI/CD**
  - Automated deployments on push to main
  - GitHub Actions workflow
  - Cache invalidation
  - Asset optimization

## Development

### Frontend Development
```bash
cd frontend
pnpm dev        # Start development server
pnpm build      # Production build
pnpm preview    # Preview production build
```

### Infrastructure Changes
```bash
cd terraform
terraform plan  # Review changes
terraform apply # Apply changes
```

## Deployment

The project uses GitHub Actions for automated deployments:
1. Push changes to the `main` branch
2. GitHub Actions will automatically:
   - Build the frontend
   - Deploy to S3
   - Invalidate CloudFront cache

Manual deployment can be triggered from the Actions tab in GitHub.

## URLs

After deployment, your site will be available at:
- Primary: `https://static.example.com`
- Alternative: `https://lol.example.com`

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
 
