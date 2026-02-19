# Zuma Agro 2030 - Elite Website

🌾 **Nigeria's Premier Agro-Industrial Platform**

[![Astro](https://img.shields.io/badge/Astro-5.0-FF5D01?logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://typescriptlang.org)

## 🚀 Tech Stack

- **Framework:** Astro 5.x with React Islands
- **Styling:** Tailwind CSS 4.0
- **Animations:** GSAP + Lenis Smooth Scroll
- **CMS:** Sanity.io
- **Deployment:** Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── animations/    # GSAP animation components
│   ├── layout/        # Header, Footer
│   ├── sections/      # Page sections
│   └── ui/            # Reusable UI components
├── content/           # Navigation config
├── layouts/           # Base layouts
├── lib/               # Utilities (Sanity client)
├── pages/             # Route pages
├── styles/            # Global styles
└── types/             # TypeScript definitions
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

Content is managed through Sanity CMS. Configure environment variables in `.env`:

```
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

## 🌐 Deployment

Automatically deployed to Vercel on push to `main` branch.

## 📄 Pages

- `/` - Homepage
- `/about` - About Us
- `/operations` - Operations Hub
- `/model` - Integrated Model
- `/investors` - Investor Relations
- `/media` - Media Center
- `/careers` - Careers
- `/contact` - Contact
- `/downloads` - Downloads
- `/privacy` - Privacy Policy
- `/terms` - Terms of Use

## 📄 License

© 2024 Zuma Agro Allied Integrated Limited. All rights reserved.
