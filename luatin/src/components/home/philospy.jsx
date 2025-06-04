"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { PiExclamationMarkFill as Exclamation } from "react-icons/pi";
import { motion } from "framer-motion";

const robotoSemiBold = Roboto({ weight: "500", subsets: ["latin"] });

export default function PhilosophySection() {
  return (
    <motion.section
      className="Philosophy-text-section flex w-full flex-col justify-center items-center"
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
      <div className="Philosophy-text flex justify-center items-center w-full bg-[#1e293b] flex-row p-3">
        <Exclamation className="hidden sm:flex md:flex lg:flex sm:text-2xl md:text-4xl lg:text-4xl text-white" />
        <p
          className={`text-center text-md sm:text-md md:text-lg lg:text-lg text-white dark:text-white ${robotoSemiBold.className}`}
        >
          <span className="font-extrabold">Philosophy:</span> Simplicity, Best
          Practices and High Performance
        </p>
      </div>
    </motion.section>
  );
}