# Synapsion Group - Professional Electrical Services Website

A modern, responsive web application for Synapsion Group, a professional electrical services company serving industrial and commercial sectors.

## Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS
- **Multilingual Support**: French (default) and English language options
- **Responsive Design**: Mobile-first approach for all devices
- **Professional Dark Theme**: Modern, technical appearance with custom color palette
- **High Performance**: Optimized with Vite for fast development and production builds
- **Component-Based Architecture**: Reusable, maintainable React components
- **SEO-Friendly**: Semantic HTML structure

## Pages

- **Home**: Hero section with company statistics and service overview
- **Services**: Comprehensive listing of all service offerings
- **Contact**: Contact form and business information

## Technology Stack

- **Frontend Framework**: React 18.2
- **Language**: TypeScript 5.2
- **Build Tool**: Vite 5.0
- **Styling**: Tailwind CSS 3.3
- **Internationalization**: i18next
- **Routing**: React Router v6

## Installation

1. Clone the repository
```bash
git clone https://github.com/enes-balikci/synapsion-test-1.git
cd synapsion-test-1
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```
The application will open at `http://localhost:3000`

## Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation with language switcher
│   ├── Hero.tsx            # Hero section with statistics
│   ├── Services.tsx        # Services grid with cards
│   ├── Contact.tsx         # Contact form component
│   └── Footer.tsx          # Footer with links
├── pages/
│   ├── Home.tsx            # Home page combining sections
│   ├── Services.tsx        # Services page
│   └── Contact.tsx         # Contact page
├── locales/
│   ├── fr.json             # French translations
│   └── en.json             # English translations
├── i18n.ts                 # i18next configuration
├── App.tsx                 # Main app with routing
├── main.tsx                # React DOM entry point
└── index.css               # Global styles
```

## Customization

### Update Company Information

1. **Contact Details** (`src/components/Contact.tsx`)
2. **Social Links** (`src/components/Footer.tsx`)
3. **Hero Content** (`src/components/Hero.tsx`)

### Modify Theme Colors

Edit `tailwind.config.js`:

```js
colors: {
  accent: {
    blue: '#0f62fe',
    cyan: '#00bcd4',
    orange: '#ff6b35',
  }
}
```

### Add/Update Translations

1. Edit `src/locales/fr.json` for French
2. Edit `src/locales/en.json` for English
3. Use in components with `const { t } = useTranslation()`

## Deployment

### Build for Production

```bash
npm run build
```

The `dist/` folder is ready to be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with code splitting
- Lazy loading of routes
- Efficient image optimization
- CSS purging for production builds

## Environment Variables

Create `.env.local` file for environment-specific variables:

```env
VITE_API_URL=your_api_endpoint
VITE_CONTACT_EMAIL=contact@synapsion.com
```

## License

Copyright © 2026 Synapsion Group. All rights reserved.

## Support

For questions or issues, please contact: info@synapsion.com.tr
