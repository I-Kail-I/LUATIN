"use client";
import React from "react";
import { RiTailwindCssFill as TailwindLogo } from "react-icons/ri";
import { SiNextdotjs as NextLogo } from "react-icons/si";
import { VscRocket as Rocket } from "react-icons/vsc";
import { GrSearch as Search } from "react-icons/gr";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const featuresText = [
    {
      icon: <NextLogo />,
      title: "NextJs",
      description:
        "NextJs is a React framework that allows you to build server-side rendered applications with ease.",
    },
    {
      icon: <TailwindLogo />,
      title: "TailwindCss",
      description:
        "TailwindCss is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      icon: <Rocket />,
      title: "Excellent Page Speed",
      description:
        "With NextJs and TailwindCss, you can build fast and performant web applications.",
    },
    {
      icon: <Search />,
      title: "Search Engine Optimization",
      description:
        "NextJs and TailwindCss make it easy to optimize your website for search engines.",
    },
  ];

  return (
    <motion.section
      className="feature-section flex w-full flex-col min-h-screen"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        type: "keyframes",
        ease: "easeInOut",
      }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="feature-title flex w-full justify-center items-center flex-col mt-10 "
      >
        <h1 className="text-lg sm:text-lg md:text-xl lg:text-xl text-blue-300 font-semibold">
          FEATURES
        </h1>
        <p className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white">
          What do you get from
          <span className="font-bold text-gray-400"> NextJs </span> and
          <span className="font-bold text-blue-200"> TailwindCss </span>
        </p>

        <p className="quick-explanations text-center text-md sm:text-md md:text-lg lg:text-lg font-semibold text-gray-500 mt-5 max-w-4xl px-9 ">
          Tailwind CSS + Next.js—the most powerful combo in modern web dev.
          Trusted by industry leaders, backed by massive GitHub stars, and
          proven in thousands of high-performance apps. Build better, faster,
          and with unmatched efficiency. The future of frontend starts here.
        </p>
      </motion.div>

      <div className="feature-list grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto p-8 mt-10">
        {featuresText.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-container flex flex-col p-6 relative w-full items-center sm:items-center md:items-center lg:items-start text-center sm:text-center md:text-center lg:text-start"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.3 * index,
              type: "keyframes",
              ease: "easeInOut",
            }}
          >
            <div className="icon-container border border-black p-3 rounded-full w-fit mb-4 bg-gray-500">
              {feature.icon}
            </div>

            <div className="feature-title">
              <h1 className="text-xl font-bold mb-2">{feature.title}</h1>
            </div>

            <div className="feature-description">
              <p className="text-gray-500 max-w-md">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
