import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, BarChart, Globe, Layers, Users } from "lucide-react";
import { fadeIn } from "../animations/fadeIn";
import { staggerContainer } from "../animations/stagger";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Lightning Fast",
      description:
        "Optimized for speed with edge computing and global CDNs to ensure lowest latency.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: "Bank-Grade Security",
      description:
        "Unbreakable encryption and compliance with SOC2, GDPR, and HIPAA standards.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-blue-500" />,
      title: "Real-time Analytics",
      description:
        "Get deep insights into your business performance with our advanced dashboard.",
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: "Global Scale",
      description:
        "Infrastructure that scales automatically to handle millions of requests per second.",
    },
    {
      icon: <Layers className="w-6 h-6 text-red-500" />,
      title: "Seamless Integration",
      description:
        "Connect with over 500+ tools and services with our one-click integrations.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: "Team Collaboration",
      description:
        "Built-in tools to help your team work better together, wherever they are.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-white dark:bg-dark relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeIn("up", 0.2)}
            className="text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase"
          >
            Powerful Features
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.3)}
            className="mt-2 text-3xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white"
          >
            Everything you need to{" "}
            <span className="text-primary-600">succeed</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="mt-4 text-lg text-slate-600 dark:text-slate-300"
          >
            Our platform provides a comprehensive suite of tools designed to
            accelerate your growth and simplify your workflow.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 font-display">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
