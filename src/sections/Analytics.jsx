import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { fadeIn } from "../animations/fadeIn";

const data = [
  { name: "Jan", value: 2400 },
  { name: "Feb", value: 1398 },
  { name: "Mar", value: 9800 },
  { name: "Apr", value: 3908 },
  { name: "May", value: 4800 },
  { name: "Jun", value: 3800 },
  { name: "Jul", value: 4300 },
];

const Analytics = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("right", 0.2)}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Insights that drive <br />
              <span className="text-primary-600">growth</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Stop guessing. Start knowing. Our advanced analytics engine
              processes millions of data points to give you actionable insights
              in real-time.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  2.4x
                </h4>
                <p className="text-slate-500">Revenue Growth</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  98%
                </h4>
                <p className="text-slate-500">Customer Retention</p>
              </div>
            </div>

            <button className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2 group">
              Explore Analytics
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("left", 0.4)}
            className="w-full lg:w-1/2"
          >
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-2xl border border-slate-100 dark:border-slate-700">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Revenue Overview
                </h3>
                <select className="bg-slate-50 dark:bg-slate-700 border-none rounded-md text-sm px-3 py-1 outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#0ea5e9"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#0ea5e9"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#E2E8F0"
                      opacity={0.3}
                    />
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8" }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#94a3b8" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        border: "none",
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#0ea5e9"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
