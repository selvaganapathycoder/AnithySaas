import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jonsson",
      role: "CTO, TechStart",
      content:
        "This platform transformed how we handle our subscription logic. What used to take weeks now takes hours. The analytics are a game changer.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthIO",
      content:
        "I was skeptical at first, but the ease of integration and the depth of features won me over. Customer support is also top-notch.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Emily Davis",
      role: "Product Manager, SoftWorks",
      content:
        "The scalability is impressive. We 10x our user base in a month and didnt experience a single hiccup. Highly recommended.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
            Loved by <span className="text-primary-600">Developers</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Don't just take our word for it. Here's what our customers have to
            say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
            >
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-8 italic">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
