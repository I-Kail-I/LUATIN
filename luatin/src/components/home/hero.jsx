"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { RiTailwindCssFill as TailwindLogo } from "react-icons/ri";
import { SiNextdotjs as NextLogo } from "react-icons/si";
import { motion } from "framer-motion";
import HeroImage from "../../../public/home/hero-pict.png";

const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const robotoLight = Roboto({ weight: "300", subsets: ["latin"] });

export default function HeroSection() {
  return (
    <motion.section
      className="hero-section flex justify-center items-center w-full flex-col gap-y-9 h-[120vh] mb-10"
      style={{
        backgroundImage: `url(${HeroImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="text-container flex w-full justify-center items-center flex-col gap-y-6"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
          type: "spring",
          damping: 60,
          ease: "easeInOut",
        }}
      >
        <h1
          className={`main-text max-w-3xl text-4xl lg:text-6xl md:text-6xl sm:text-5xl text-center dark:text-white text-white ${robotoBold.className}`}
        >
          <span className="text-shadow-lg text-shadow-black ">
            Creating webs with
          </span>
          <span className="font-bold text-gray-400"> NextJs </span>{" "}
          <span className="black">-</span>{" "}
          <span className="font-bold text-blue-200"> TailwindCss </span>
        </h1>

        <motion.p
          className={`description-text text-center max-w-2xl text-md sm:text-lg md:text-lg lg:text-lg text-white dark:text-white ${robotoLight.className}`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
        >
          <span className="font-bold text-gray-400"> NextJs </span> and
          <span className="font-bold text-blue-200"> TailwindCss </span> are an
          free open source tools that can greatly improve your activity on
          making a website, wheter you're just making a small project, or even
          an entire website.
          <span className="font-bold text-gray-400"> NextJs </span> and
          <span className="font-bold text-blue-200"> TailwindCss </span> are
          there to help you.
        </motion.p>
      </motion.div>

      <motion.div
        className="link-container flex gap-x-5 gap-y-5 flex-col sm:flex-col md:flex-row lg:flex-row w-full justify-center items-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.2,
          type: "keyframes",
          ease: "easeInOut",
        }}
      >
        <a
          className={`tailwindcss-link bg-violet-300 p-3 rounded-full hover:bg-blue-600 duration-300 transition-colors text-white flex flex-row ${robotoLight.className}`}
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start with TailwindCss
          <TailwindLogo className="text-blue-200 mt-0.5 ms-2 text-xl" />
        </a>

        <a
          className={`tailwindcss-link bg-gray-600 px-6 py-3 rounded-full hover:bg-gray-800 duration-300 transition-colors text-white flex flex-row ${robotoLight.className}`}
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start with NextJs
          <NextLogo className="text-gray-500 mt-0.5 ms-4 text-xl" />
        </a>
      </motion.div>
    </motion.section>
  );
}
