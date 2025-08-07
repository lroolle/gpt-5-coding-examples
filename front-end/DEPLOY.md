# Cloudflare Pages Deployment Guide

## Quick Deploy

### Option 1: Direct GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `front-end`
   - Node version: `20`

### Option 2: Manual Deploy with Wrangler CLI

1. Install Wrangler:
```bash
npm install -g wrangler
```

2. Build the project:
```bash
cd front-end
npm install
npm run build
```

3. Deploy to Cloudflare Pages:
```bash
npx wrangler pages deploy out --project-name=gpt-5-examples
```

## Environment Variables

No environment variables required for basic deployment.

## Build Settings

- **Framework**: Next.js (Static Export)
- **Node Version**: 20
- **Build Command**: `npm run build`
- **Output Directory**: `out`
- **Install Command**: `npm install`

## Features Included

- ✅ Static site generation
- ✅ Search functionality
- ✅ Responsive design
- ✅ All demo apps included
- ✅ Auto-deploy on push

## Troubleshooting

### Build Errors

If you encounter lightningcss errors:
```bash
npm install lightningcss --save-dev
```

### Large Build Size

The build includes 50+ demo HTML files. This is expected.

## Preview Deployments

Every pull request automatically gets a preview URL.

## Custom Domain

In Cloudflare Pages dashboard:
1. Go to your project
2. Click "Custom domains"
3. Add your domain
4. Follow DNS configuration steps