import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Settings, PieChart } from "lucide-react";
import { fadeIn } from "../animations/fadeIn";

import createImg from "../assets/walkthrough_create_3d.png";
import manageImg from "../assets/walkthrough_manage_3d.png";
import analyzeImg from "../assets/walkthrough_analyze_3d.png";

const Walkthrough = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    {
      id: "dashboard",
      label: "Create",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    { id: "manage", label: "Manage", icon: <Settings className="w-5 h-5" /> },
    { id: "analyze", label: "Analyze", icon: <PieChart className="w-5 h-5" /> },
  ];

  const content = {
    dashboard: {
      title: "Visualize your success",
      description:
        "Create stunning dashboards in minutes. Drag and drop widgets, customize layouts, and get a bird's eye view of your entire operation.",
      image: createImg,
    },
    manage: {
      title: "Total control at your fingertips",
      description:
        "Manage users, permissions, and settings with granular control. Automate routine tasks and focus on what matters most.",
      image: manageImg,
    },
    analyze: {
      title: "Data-driven decisions",
      description:
        "Deep dive into your metrics with advanced analytics. Identify trends, spot opportunities, and make informed decisions faster.",
      image: analyzeImg,
    },
  };

  return (
    <section
      id="walkthrough"
      className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeIn("up", 0.2)}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white"
          >
            How it <span className="text-primary-600">works</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-4 p-6 rounded-xl text-left transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-slate-800 shadow-lg border-l-4 border-primary-600"
                    : "hover:bg-white/50 dark:hover:bg-slate-800/50"
                }`}
              >
                <div
                  className={`p-3 rounded-full ${
                    activeTab === tab.id
                      ? "bg-primary-100 text-primary-600"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-500"
                  }`}
                >
                  {tab.icon}
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      activeTab === tab.id
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {tab.label}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-2 shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <img
                    src={content[activeTab].image}
                    alt={content[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {content[activeTab].title}
                      </h3>
                      <p className="text-slate-200">
                        {content[activeTab].description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Walkthrough;
