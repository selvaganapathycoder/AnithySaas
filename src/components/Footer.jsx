import React from "react";
import { Twitter, Linkedin, Github, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a
              href="#"
              className="text-2xl font-display font-bold text-primary-600 dark:text-primary-400 mb-6 inline-block"
            >
              Anithy<span className="text-slate-900 dark:text-white">Saas</span>
            </a>
            <p className="text-slate-500 mb-6">
              Making SaaS growth simple, scalable, and successful for businesses
              of all sizes.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary-500 hover:shadow-md transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary-500 hover:shadow-md transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary-500 hover:shadow-md transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary-500 hover:shadow-md transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Product
            </h4>
            <ul className="space-y-4">
              {[
                "Features",
                "Integrations",
                "Pricing",
                "Changelog",
                "Docs",
                "Download",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Careers",
                "Blog",
                "Contact",
                "Partners",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6">
              Subscribe
            </h4>
            <p className="text-slate-500 mb-6">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 bg-white dark:bg-slate-800 border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none text-slate-900 dark:text-white shadow-sm"
              />
              <button className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Anithy Saas Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-primary-600 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-primary-600 transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-primary-600 transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
