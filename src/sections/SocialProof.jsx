import React from "react";

const SocialProof = () => {
  const brands = [
    "Acme Corp",
    "GlobalTech",
    "Nebula",
    "FoxRun",
    "Circle",
    "Aven",
    "Goldline",
    "Flash",
    "Acme Corp",
    "GlobalTech",
    "Nebula",
    "FoxRun",
    "Circle",
    "Aven",
    "Goldline",
    "Flash",
  ];

  return (
    <section className="py-10 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
          Trusted by 10,000+ teams worldwide
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="mx-8 text-2xl font-display font-bold text-slate-300 dark:text-slate-700 hover:text-primary-500 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
          {brands.map((brand, index) => (
            <span
              key={`${index}-2`}
              className="mx-8 text-2xl font-display font-bold text-slate-300 dark:text-slate-700 hover:text-primary-500 transition-colors cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
