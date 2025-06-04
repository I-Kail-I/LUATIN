import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FAQS() {
  const question = [
    {
      title: "Why Tailwind and NextJs?",
      description:
        "Because you get the best of both worlds: Next.js gives you fast performance, SEO optimization, and scalable architecture, while Tailwind CSS lets you build beautiful, responsive designs without ever leaving your HTML. Together, they help you develop faster, look better, and scale easier—with less headache and cleaner code",
    },
    {
      title: "How do you install Next.js with Tailwind CSS?",
      description:
        "Run this one-liner and you’re ready to go: \n npx create-next-app@latest my-app -e with-tailwindcss \n It scaffolds a full Next.js project with Tailwind CSS already configured—no setup, no headaches. Just cd my-app, start the dev server, and build.",
    },
    {
      title: "What do I need to start?",
      description:
        "Just three things: \n 1. Node.js installed – preferably the latest LTS version \n 2. A code editor – VS Code is the go-to. \n 3. Basic terminal knowledge – you'll be running commands like npm install or npx create-next-app. \n That’s it. No complex setup. No extra tools. Once you’ve got Node, you're good to roll.",
    },
    {
      title: "What do I need to start?",
      description:
        "Just three things: 1) Node.js installed (latest LTS recommended), 2) a code editor like VS Code, and 3) basic terminal knowledge. Once you’ve got Node, you're ready to roll.",
    },
    {
      title: "Is Tailwind CSS hard to learn?",
      description:
        "Not at all. It might feel weird at first if you're used to traditional CSS, but once you get the hang of utility classes, you'll write styles faster with way less context switching.",
    },
    {
      title: "Can I use components with Tailwind CSS?",
      description:
        "Yes, and you should. Tailwind pairs perfectly with component-based frameworks like Next.js. Build reusable UI components, style them with Tailwind classes, and keep everything clean, modular, and scalable.",
    },
  ];

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center flex-col"
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
      <div className="title-container w-full text-center justify-center items-center flex flex-col">
        <p className="small-text text-blue-500 text-lg font-semibold dark:text-blue-300">
          FAQS
        </p>
        <h1 className="title-text text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="description-text text-sm sm:text-sm md:text-xl max-w-lg sm:max-w-lg md:max-w-3xl lg:max-w-3xl text-gray-500 mt-4">
          Dive into the following questions to gain insights into the powerful
          features that AstroWind offers and how it can elevate your web
          development journey.
        </p>
      </div>

      <div className="questions-container w-full gird grid-cols-6 grid-rows-1 sm:grid-cols-6 sm:grid-rows-1 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 gap-3">
        {question.map((content, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.2 * index,
              type: "keyframes",
              ease: "easeInOut",
            }}
            key={index}
            className="question-card flex flex-col justify-center items-center"
          >
            w
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
