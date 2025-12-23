# Anithy Saas - Modern SaaS Landing Page

![Project Status](https://img.shields.io/badge/status-production--ready-success)
![React](https://img.shields.io/badge/react-18.2.0-blue)
![Vite](https://img.shields.io/badge/vite-5.0.0-purple)
![Tailwind](https://img.shields.io/badge/tailwindcss-3.4.1-cyan)

A high-performance, fully responsive, and SEO-optimized SaaS landing page built with modern web technologies. Designed to meet 2026 hiring standards with complex animations, dark mode support, and a scalable architecture.

## 🚀 Live Demo
- [Live Site (GitHub Pages)](https://selvaganapathycoder.github.io/AnithySaas)
- [Live Site (Vercel)](https://anithy-saas-dd45m8fia-selvaganapathys-projects-840a79fb.vercel.app)

## ✨ Features

- **🎨 Modern UI/UX**: Glassmorphism, premium gradients, and clean typography (Inter & Outfit fonts).
- **🌙 Dark/Light Mode**: Fully integrated theme switching with local storage persistence.
- **⚡ High Performance**: Optimized assets, lazy loading, and minimal bundle size.
- **🎞️ Advanced Animations**: Scroll reveals, parallax effects, and staggered animations using Framer Motion.
- **📊 Analytics Dashboard**: Interactive charts powered by Recharts.
- **📱 Fully Responsive**: Flawless experience across mobile, tablet, and desktop devices.
- **🔍 SEO Optimized**: React Helmet integration for meta tags and semantic HTML structure.
- **💸 Interactive Pricing**: Toggle between monthly and yearly plans with savings calculation.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [clsx](https://github.com/lukeed/clsx)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO**: [React Helmet Async](https://github.com/staylor/react-helmet-async)
- **Deployment**: Vercel / Netlify / GitHub Pages

## 📂 Project Structure

```
src/
 ├─ components/     # Reusable UI components (Navbar, Footer, SEO, etc.)
 ├─ sections/       # Page sections (Hero, Features, Pricing, etc.)
 ├─ context/        # Global state (ThemeContext)
 ├─ animations/     # Animation variants (fadeIn, stagger, parallax)
 ├─ assets/         # Static assets
 └─ App.jsx         # Main application entry
```

## ⚡ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/saas-landing-page.git
   cd saas-landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📝 Developer Notes

- **Theming**: The theme logic is handled in `src/context/ThemeContext.jsx`. It respects the user's system preference by default.
- **Animations**: All animation constants are centralized in `src/animations/` to ensure consistency.
- **Customization**: Update `src/index.css` for global styles or `tailwind.config.js` to modify the design system tokens.

---

*Built with ❤️ by [selvaganapathycoder]*
