# Zuma Agro Allied Integrated Limited Website

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/klmayua/ZumaAgro)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-blue.svg)](LICENSE)

## 🌾 Overview

Official website for **Zuma Agro Allied Integrated Limited** - a nationwide agro-industrial platform designed to address Nigeria's food security, protein supply, and agro-industrialisation gaps through a structured, secure, and scalable operating model.

Built with **Next.js 14**, **Tailwind CSS**, and deployed on **Netlify**.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### Core Features
- 🏠 **Homepage** - Hero section, value propositions, live metrics dashboard
- 📖 **About Us** - Company story, leadership team, strategic partnerships
- 🚜 **Operations** - Livestock, grains, and apiculture divisions
- 🔄 **Integrated Model** - Interactive 9-phase implementation framework
- 🌱 **Sustainability** - ESG framework and initiatives
- 💼 **Investors** - Investment thesis, governance, financial information
- 📰 **Media Center** - News, events, and press resources
- 💚 **Careers** - Job listings, culture, benefits
- 📞 **Contact** - Contact form, department directory, FAQ
- 📥 **Downloads** - Resource library with filtering

### Technical Features
- ✅ Fully responsive design (mobile-first)
- ✅ WCAG 2.1 AA accessibility compliance
- ✅ SEO optimized with proper metadata
- ✅ Fast page loads with Next.js optimization
- ✅ Search functionality
- ✅ Form validation and submission
- ✅ Error boundaries and loading states
- ✅ E2E testing with Playwright
- ✅ Automated deployments via Netlify

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | JavaScript (ES6+) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Forms** | React Hook Form |
| **Testing** | Playwright, Jest |
| **Linting** | ESLint, Prettier |
| **CMS** | Sanity.io (optional) |
| **Search** | Algolia (optional) |
| **Deployment** | Netlify |
| **Version Control** | Git, GitHub |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/klmayua/ZumaAgro.git
cd ZumaAgro/zuma-agro-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.local.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
zuma-agro-website/
├── public/                 # Static assets
│   ├── logo.png
│   ├── images/
│   └── downloads/
├── src/
│   └── app/
│       ├── about/          # About page
│       ├── careers/        # Careers page
│       ├── components/     # Reusable components
│       │   ├── HeroSection.js
│       │   ├── MetricsDashboard.js
│       │   ├── SearchBar.js
│       │   ├── SiteFooter.js
│       │   └── ValueProposition.js
│       ├── contact/        # Contact page
│       ├── downloads/      # Downloads page
│       ├── investors/      # Investors page
│       ├── media/          # Media center page
│       ├── model/          # Integrated model page
│       ├── operations/     # Operations page
│       ├── sustainability/ # Sustainability page
│       ├── api/            # API routes
│       ├── globals.css     # Global styles
│       ├── layout.js       # Root layout
│       ├── loading.js      # Loading component
│       ├── error.js        # Error boundary
│       ├── not-found.js    # 404 page
│       └── page.js         # Homepage
├── tests/                  # E2E tests
│   └── e2e/
├── .env.local.example      # Environment template
├── .eslintrc.json          # ESLint config
├── .gitignore              # Git ignore rules
├── .prettierrc             # Prettier config
├── jest.config.js          # Jest config
├── netlify.toml            # Netlify config
├── next.config.js          # Next.js config
├── package.json            # Dependencies
├── playwright.config.js    # Playwright config
├── postcss.config.js       # PostCSS config
├── tailwind.config.js      # Tailwind config
└── README.md               # This file
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |
| `npm run test` | Run Jest tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run test:e2e:ui` | Run E2E tests with UI |

## 🔐 Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional - for form submissions
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=/api/contact

# Optional - for CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx
NEXT_PUBLIC_SANITY_DATASET=production

# Optional - for search
NEXT_PUBLIC_ALGOLIA_APP_ID=xxx
NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=xxx
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests (Playwright)
```bash
# Install Playwright browsers
npx playwright install

# Run all E2E tests
npm run test:e2e

# Run with UI
npm run test:e2e:ui

# Run specific test file
npx playwright test tests/e2e/homepage.spec.js
```

## 🚢 Deployment

### Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
3. Set environment variables in Netlify dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches

## 📄 License

This project is proprietary to Zuma Agro Allied Integrated Limited.

## 📞 Contact

- **Website:** [zumaagro.com](https://zumaagro.com)
- **Email:** info@zumaagro.com
- **GitHub:** [klmayua/ZumaAgro](https://github.com/klmayua/ZumaAgro)

---

Built with ❤️ for Nigerian Agriculture
