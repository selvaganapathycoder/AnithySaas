import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import SEO from "./components/SEO";

// Sections
import Hero from "./sections/Hero";
import SocialProof from "./sections/SocialProof";
import Features from "./sections/Features";
import Walkthrough from "./sections/Walkthrough";
import Analytics from "./sections/Analytics";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen font-sans antialiased text-slate-900 bg-white dark:bg-dark dark:text-white transition-colors duration-300 selection:bg-primary-500/30 selection:text-primary-900 dark:selection:text-primary-100">
          <SEO
            title="SaaSFlow - Scale Your Business"
            description="The ultimate SaaS platform for growing your business. Analytics, automation, and more."
          />

          <Navbar />

          <main>
            <Hero />
            <SocialProof />
            <Features />
            <Walkthrough />
            <Analytics />
            <Pricing />
            <Testimonials />
            <FAQ />
            <CTA />
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
