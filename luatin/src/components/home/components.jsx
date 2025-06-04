"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";

const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });

export default function ComponentsSection() {
  const componentsContent = [
    {
      box: 1,
      icon: "📍",
      title: "Headers",
      description: "Website GPS for navigation direction",
    },
    {
      box: 2,
      icon: "📝",
      title: "Content",
      description: "The meat and potatoes of your site - king of the page",
    },
    {
      box: 3,
      icon: "🦸",
      title: "Hero",
      description: "Makes grand superhero entrances on your page",
    },
    {
      box: 4,
      icon: "👆",
      title: "Call-to-Action",
      description: "That enthusiastic button nudging users to take action",
    },
    {
      box: 5,
      icon: "✨",
      title: "Features",
      description: "Showcase your product's superpowers and bragging rights",
    },
    {
      box: 6,
      icon: "💰",
      title: "Pricing",
      description: "Tempting dessert menu of your offerings",
    },
  ];

  return (
    <motion.section
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
      className="components-section w-full flex justify-center items-center mt-20 bg-[#FBFBFB] dark:bg-[#030712] pb-20"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-rows-6 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-40">
          {componentsContent.map((component, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4 * index,
                type: "keyframes",
                ease: "easeInOut",
              }}
              key={index}
              className="h-full min-h-[200px] flex shadow-lg dark:border-gray-800 bg-blend-exclusion dark:bg-[#0F172A]/40 border border-white/20 rounded-2xl"
            >
              <div className="component-card h-full rounded-xl px-10 py-5 shadow  flex flex-col items-center text-center">
                <span className="text-3xl mb-4">{component.icon}</span>
                <h1 className={`text-xl mb-2 ${robotoBold.className}`}>
                  {component.title}
                </h1>

                <p className="text-gray-300">{component.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
