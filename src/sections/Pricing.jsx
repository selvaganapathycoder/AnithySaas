import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const Pricing = () => {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: annual ? 29 : 39,
      description: "Perfect for small teams and startups.",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "20GB storage",
        "Email support",
      ],
      notIncluded: ["Custom domain", "API access", "SSO"],
      popular: false,
    },
    {
      name: "Pro",
      price: annual ? 79 : 99,
      description: "Best for growing businesses.",
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "100GB storage",
        "Priority email support",
        "Custom domain",
        "API access",
      ],
      notIncluded: ["SSO"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: annual ? 199 : 249,
      description: "For large scale organizations.",
      features: [
        "Unlimited team members",
        "Custom reporting",
        "Unlimited storage",
        "24/7 phone support",
        "Custom domain",
        "API access",
        "SSO",
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Simple, transparent{" "}
            <span className="text-primary-600">pricing</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Choose the perfect plan for your needs. No hidden fees.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm font-semibold ${
                !annual ? "text-slate-900 dark:text-white" : "text-slate-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none"
            >
              <motion.div
                animate={{ x: annual ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-md transform"
              />
            </button>
            <span
              className={`text-sm font-semibold ${
                annual ? "text-slate-900 dark:text-white" : "text-slate-500"
              }`}
            >
              Yearly{" "}
              <span className="text-green-500 text-xs ml-1 font-bold">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl bg-white dark:bg-slate-800 border ${
                plan.popular
                  ? "border-primary-500 shadow-xl shadow-primary-500/10 z-10 scale-105"
                  : "border-slate-200 dark:border-slate-700"
              } transition-transform duration-300 hover:scale-[1.02]`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-slate-500 text-sm mb-6">{plan.description}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-slate-900 dark:text-white">
                  ${plan.price}
                </span>
                <span className="text-slate-500">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-sm text-slate-400 dark:text-slate-600"
                  >
                    <X className="w-5 h-5 text-slate-300 dark:text-slate-700 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary-600 hover:bg-primary-700 text-white"
                    : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
