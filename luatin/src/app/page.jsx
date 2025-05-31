"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { RiTailwindCssFill as TailwindLogo } from "react-icons/ri";
import HeroImage from "../../public/home/hero-pict.png";
import { PiExclamationMarkFill as Exclamation } from "react-icons/pi";
import { SiNextdotjs as NextLogo } from "react-icons/si";
import Pict1 from "../../public/home/function-1.avif";
import Pict2 from "../../public/home/function-2.avif";
import Pict3 from "../../public/home/function-3.avif";
import Pict4 from "../../public/home/function-4.avif";
import { VscRocket as Rocket } from "react-icons/vsc";
import { motion } from "framer-motion";
import { GrSearch as Search } from "react-icons/gr";

const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });
const robotoSemiBold = Roboto({ weight: "500", subsets: ["latin"] });
const robotoLight = Roboto({ weight: "300", subsets: ["latin"] });

export default function Home() {
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

  const functionality = [
    {
      image: Pict1,
      title: "Building on modern foundations",
      description:
        "Gain a competitive advantage by incorporating industry leading practices",
      list1: "Built on top of Next.Js",
      description1:
        "Benefiting from the performance and developer-friendly features of this modern static site generator",
      list2: "Styled using Tailwind CSS",
      description2:
        "Facilitating rapid design and consistent styling with this highly popular utility-first CSS framework.",
      list3: "Cross-browser compatibility",
      description3:
        "Ensure your website looks and functions consistently across various web browsers, delivering a seamless experience to all users.",
    },
  ];

  return (
    <motion.main className="flex min-h-screen flex-col">
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
          transition={{ duration: 0.4 }}
        >
          <h1
            className={`main-text max-w-3xl text-4xl lg:text-6xl md:text-6xl sm:text-5xl text-center dark:text-white text-white ${robotoBold.className}`}
          >
            Creating webs with
            <span className="font-bold text-gray-400"> NextJs </span>{" "}
            <span className="black">-</span>{" "}
            <span className="font-bold text-blue-200"> TailwindCss </span>
          </h1>

          <motion.p
            className={`description-text text-center max-w-2xl text-md sm:text-lg md:text-lg lg:text-lg text-white dark:text-white ${robotoLight.className}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="font-bold text-gray-400"> NextJs </span> and
            <span className="font-bold text-blue-200"> TailwindCss </span> are
            an free open source tools that can greatly improve your activity on
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
          transition={{ duration: 0.4, delay: 0.4 }}
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

      <motion.section
        className="Philosophy-text-section flex w-full flex-col justify-center items-center"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
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

      <motion.section
        className="feature-section flex w-full flex-col min-h-screen"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="feature-title flex w-full justify-center items-center flex-col mt-20"
        >
          <h1 className="text-lg sm:text-lg md:text-xl lg:text-xl text-blue-300 font-semibold">
            FEATURES
          </h1>
          <p className="text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white">
            What do you get from{" "}
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

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="feature-list grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto p-8 mt-10"
        >
          {featuresText.map((feature, index) => (
            <div
              key={index}
              className="feature-container flex flex-col p-6 relative"
            >
              <div className="icon-container border border-black p-3 rounded-full w-fit mb-4 bg-gray-500">
                {feature.icon}
              </div>

              <div className="feature-title">
                <h1 className="text-xl font-bold mb-2">{feature.title}</h1>
              </div>

              <div className="feature-description">
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="functionality-section flex w-full flex-col min-h-screen"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="functionality-title flex w-full justify-center items-center mt-30"
        >
          <h1
            className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold max-w-lg text-center ${robotoBold.className}`}
          >
            <span className="font-bold text-gray-400"> NextJs </span> and
            <span className="font-bold text-blue-200"> TailwindCss </span> get
            your times worth!
          </h1>
        </motion.div>
      </motion.section>
    </motion.main>
  );
}
