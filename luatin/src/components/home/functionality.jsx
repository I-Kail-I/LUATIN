"use client";
import React from "react";
import { Roboto } from "next/font/google";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Pict1 from "../../../public/home/function-1.avif";
import Pict2 from "../../../public/home/function-2.avif";
import Pict3 from "../../../public/home/function-3.avif";
import { ROOT_DIR_ALIAS } from "next/dist/lib/constants";

const robotoBold = Roboto({ weight: "700", subsets: ["latin"] });

export default function FunctionalitySection() {
  const functionality1 = [
    {
      image: Pict1,
      title: "Building on modern foundations",
      description:
        "Gain a competitive advantage by incorporating industry leading practices.",
      list1: "Built on top of Next.Js",
      description1:
        "Benefiting from the performance and developer-friendly features of this modern static site generator",
      list2: "Styled using Tailwind CSS.",
      description2:
        "Facilitating rapid design and consistent styling with this highly popular utility-first CSS framework.",
      list3: "Cross-browser compatibility",
      description3:
        "Ensure your website looks and functions consistently across various web browsers, delivering a seamless experience to all users.",
    },
  ];

  const functionality2 = [
    {
      image: Pict2,
      description: "Ensure your online presence truly represents you.",
      list1: "High level of customization",
      description1:
        "TailwindCss the NextJs effortlessly to match your brand's identity and requirements, making your website distinct and saving you time.",
      list2: "Multiple layout possibilities",
      description2:
        "Explore various layout options to find the structure that best presents your content, enhancing user engagement and navigation.",
      list3: "Fully responsive design",
      description3:
        "Ensure your website's optimal performance on various devices and screen sizes, providing a consistent and enjoyable user experience.",
      list4: "Integration of media.",
      description4:
        "Seamlessly incorporate images, videos, and multimedia elements that enhance your content and engage visitors effectively.",
    },
  ];

  const functionality3 = [
    {
      image: Pict3,
      description: "Designed to foster growth and success..",
      list1: "Enhanced user engagement",
      description1:
        "Captivate your audience with interactive elements, intuitive navigation, and visually appealing layouts, encouraging longer visits.",
      list2: "Continuous improvement",
      description2:
        "Ensure your website stays aligned with the latest trends and technologies through regular updates and enhancements.",
      list3: "Time and resource efficiency.",
      description3:
        "Skip the time-consuming process of building a website from scratch and launch your online presence sooner with AstroWind.",
      list4: "Community support.",
      description4:
        "Join the growing AstroWind community for insights, resources, and assistance, ensuring you're never alone on your web development journey.",
    },
  ];

  return (
    <motion.section
      className="functionality-section flex w-full flex-col min-h-screen justify-center "
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
        transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
        className="functionality-title flex w-full justify-center items-center pt-30 bg-[#EFF6FF] dark:bg-[#030712] flex-col"
      >
        <p
          className={`small-text text-lg pb-1 text-blue-900 ${robotoBold.className}`}
        >
          With
        </p>
        <h1
          className={`text-2xl sm:text-2xl md:text-3xl lg:text-5xl max-w-xl font-bold text-center ${robotoBold.className}`}
        >
          <span className="font-bold text-gray-400"> NextJs </span> and
          <span className="font-bold text-blue-200"> TailwindCss </span> get
          your times worth!
        </h1>
      </motion.div>

      {functionality1.map((feature, index) => (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
          key={index}
          className="list-container flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center pt-20 md:text-center sm:text-center lg:text-start text-center gap-y-15 bg-[#EFF6FF] dark:bg-[#030712]"
        >
          <div className="image-container flex w-full justify-center items-center p-4">
            <div className="image flex w-170">
              <Image
                src={feature.image}
                alt="Image"
                layout="cover"
                className="image rounded-2xl"
              />
            </div>
          </div>

          <div className="text-container w-full justify-center items-center flex flex-col me-10 sm:me-10 md:me-0 lg:px-4">
            <div className="title-container">
              <h1
                className={`title-text text-4xl hidden sm:hidden md:flex lg:flex lg:text-[min(4vw,2.5rem)] ${robotoBold.className}`}
              >
                {feature.title}
              </h1>
              <p className="description-text text-gray-500 text-lg lg:text-[min(1.25vw,1.125rem)] max-w-lg">
                {feature.description}
              </p>
            </div>

            {[1, 2, 3].map((index) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3 * index,
                  type: "spring",
                  damping: 60,
                  ease: "easeInOut",
                }}
                key={index}
                className="list-container flex flex-col mt-10"
              >
                <div className="list-title-container flex flex-col">
                  <div className="flex flex-col">
                    <h1 className="list-title flex text-lg sm:text-lg md:text-xl lg:text-[min(1.5vw,1.25rem)] font-semibold justify-center sm:justify-center md:justify-start lg:justify-start">
                      <Check
                        className="bg-green-600 rounded-full p-1 me-3 hidden sm:hidden md:flex lg:flex"
                        size={30}
                      />
                      {feature[`list${index}`]}
                    </h1>
                    <p className="text-gray-500 max-w-sm ms-10.5 text-base sm:text-base md:text-sm lg:text-[min(1.25vw,1rem)]">
                      {feature[`description${index}`]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {functionality2.map((feature, index) => (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.2 * index,
            type: "keyframes",
            ease: "easeInOut",
          }}
          key={index}
          className="list-container flex flex-col sm:flex-col md:flex-col lg:flex-row-reverse justify-center items-center pt-20 md:text-center sm:text-center lg:text-start text-center gap-y-15 bg-[#EFF6FF] dark:bg-[#030712]"
        >
          <div className="image-container flex w-full justify-center items-center p-4">
            <div className="image flex w-170">
              <Image
                src={feature.image}
                alt="Image"
                layout="cover"
                className="image rounded-2xl"
              />
            </div>
          </div>

          <div className="text-container w-full justify-center items-center flex flex-col me-10 sm:me-10 md:me-0 lg:px-4">
            <div className="title-container">
              <p className="description-text text-gray-500 text-lg lg:text-[min(1.25vw,1.125rem)] max-w-lg">
                {feature.description}
              </p>
            </div>

            {[1, 2, 3, 4].map((index) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3 * index,
                  type: "spring",
                  damping: 60,
                  ease: "easeInOut",
                }}
                key={index}
                className="list-container flex flex-col mt-10"
              >
                <div className="list-title-container flex flex-col">
                  <div className="flex flex-col">
                    <h1 className="list-title flex text-lg sm:text-lg md:text-xl lg:text-[min(1.5vw,1.25rem)] font-semibold justify-center sm:justify-center md:justify-start lg:justify-start">
                      <Check
                        className="bg-green-600 rounded-full p-1 me-3 hidden sm:hidden md:flex lg:flex"
                        size={30}
                      />
                      {feature[`list${index}`]}
                    </h1>
                    <p className="text-gray-500 max-w-sm ms-10.5 text-base sm:text-base md:text-sm lg:text-[min(1.25vw,1rem)]">
                      {feature[`description${index}`]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {functionality3.map((feature, index) => (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
          key={index}
          className="list-container flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center pt-20 pb-10 md:text-center sm:text-center lg:text-start text-center gap-y-15 bg-[#EFF6FF] dark:bg-[#030712]"
        >
          <div className="image-container flex w-full justify-center items-center p-4">
            <div className="image flex w-170">
              <Image
                src={feature.image}
                alt="Image"
                layout="cover"
                className="image rounded-2xl"
              />
            </div>
          </div>

          <div className="text-container w-full justify-center items-center flex flex-col me-10 sm:me-10 md:me-0 lg:px-4">
            <div className="title-container">
              <p className="description-text text-gray-500 text-lg lg:text-[min(1.25vw,1.125rem)] max-w-lg">
                {feature.description}
              </p>
            </div>

            {[1, 2, 3, 4].map((index) => (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.3 * index,
                  type: "spring",
                  damping: 60,
                  ease: "easeInOut",
                }}
                key={index}
                className="list-container flex flex-col mt-10"
              >
                <div className="list-title-container flex flex-col">
                  <div className="flex flex-col">
                    <h1 className="list-title flex text-lg sm:text-lg md:text-xl lg:text-[min(1.5vw,1.25rem)] font-semibold justify-center sm:justify-center md:justify-start lg:justify-start">
                      <Check
                        className="bg-green-600 rounded-full p-1 me-3 hidden sm:hidden md:flex lg:flex"
                        size={30}
                      />
                      {feature[`list${index}`]}
                    </h1>
                    <p className="text-gray-500 max-w-sm ms-10.5 text-base sm:text-base md:text-sm lg:text-[min(1.25vw,1rem)]">
                      {feature[`description${index}`]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
