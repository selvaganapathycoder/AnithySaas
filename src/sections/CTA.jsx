import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "../animations/fadeIn";

const CTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-600 to-purple-600 px-6 py-16 md:px-16 md:py-24 text-center">
          {/* Background Design Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("up", 0.2)}
            className="relative z-10 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
              Ready to scale your business?
            </h2>
            <p className="text-primary-100 text-lg mb-10">
              Join 10,000+ companies already using our platform. Start your
              14-day free trial today. No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-lg bg-white text-primary-600 font-bold hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-lg bg-transparent border border-white text-white font-bold hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
