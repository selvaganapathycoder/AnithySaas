import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { fadeIn } from "../animations/fadeIn";
import { staggerContainer } from "../animations/stagger";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div variants={fadeIn("up", 0.2)}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-semibold text-sm mb-6 border border-primary-100 dark:border-primary-800">
                🚀 Version 2.0 is now live
              </span>
              <h1 className="text-4xl lg:text-6xl font-display font-bold leading-tight text-slate-900 dark:text-white">
                Scale your SaaS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                  Business Faster
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.4)}
              className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0"
            >
              The all-in-one platform designed to help you build, launch, and
              grow your subscription business with ease. Powerful analytics,
              seamless payments, and more.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#pricing"
                className="px-8 py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold text-lg transition-all shadow-lg shadow-primary-500/30 flex items-center gap-2 group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#demo"
                className="px-8 py-4 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                View Demo
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.8)}
              className="flex items-center justify-center lg:justify-start gap-6 pt-4"
            >
              {[
                "No credit card required",
                "14-day free trial",
                "Cancel anytime",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              style={{ y: y1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
            >
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="3D Abstract SaaS Interface"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Elements (Parallax) */}
            <motion.div
              style={{ y: y2 }}
              className="absolute -top-12 -right-12 z-0 hidden lg:block"
            >
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                    +28%
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Growth</div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      $12,450
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
