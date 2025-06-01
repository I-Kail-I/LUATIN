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
import { VscRocket as Rocket } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { GrSearch as Search } from "react-icons/gr";
import Image from "next/image";

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
      title3: "Fully responsive design",
      description3:
        "Ensure your website's optimal performance on various devices and screen sizes, providing a consistent and enjoyable user experience.",
      title4: "Integration of media.",
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
      title3: "Time and resource efficiency.",
      description3:
        "Skip the time-consuming process of building a website from scratch and launch your online presence sooner with AstroWind.",
      title4: "Community support.",
      description4:
        "Join the growing AstroWind community for insights, resources, and assistance, ensuring you're never alone on your web development journey.",
    },
  ];

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
          transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
        >
          <h1
            className={`main-text max-w-3xl text-4xl lg:text-6xl md:text-6xl sm:text-5xl text-center dark:text-white text-white ${robotoBold.className}`}
          >
            <span className="text-shadow-2xl shadow-black">
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
          transition={{
            duration: 0.4,
            delay: 0.3,
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
                duration: "0.4",
                delay: index * 0.3,
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

        {functionality1.map((feature, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
            key={index}
            className="list-container flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center mt-20 md:text-center sm:text-center lg:text-start text-center gap-y-15"
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

            <div className="text-container w-full justify-center items-center flex flex-col me-20 lg:me-0 lg:px-4">
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
                <div key={index} className="list-container flex flex-col mt-10">
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
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        {functionality2.map((feature, index) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
            key={index}
            className="list-container flex flex-col sm:flex-col md:flex-col lg:flex-row-reverse justify-center items-center mt-20 md:text-center sm:text-center lg:text-start text-center gap-y-15"
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

            <div className="text-container w-full justify-center items-center flex flex-col me-20 lg:me-0 lg:px-4">
              <div className="title-container">
                <p className="description-text text-gray-500 text-lg lg:text-[min(1.25vw,1.125rem)] max-w-lg">
                  {feature.description}
                </p>
              </div>

              {[1, 2, 3].map((index) => (
                <div key={index} className="list-container flex flex-col mt-10">
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
                </div>
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
            className="list-container flex flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center mt-20 md:text-center sm:text-center lg:text-start text-center gap-y-15"
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

            <div className="text-container w-full justify-center items-center flex flex-col me-20 lg:me-0 lg:px-4">
              <div className="title-container">
                <p className="description-text text-gray-500 text-lg lg:text-[min(1.25vw,1.125rem)] max-w-lg">
                  {feature.description}
                </p>
              </div>

              {[1, 2, 3].map((index) => (
                <div key={index} className="list-container flex flex-col mt-10">
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
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, type: "keyframes", ease: "easeInOut" }}
        className="components-section w-full flex justify-center items-center mt-20"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-rows-6 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-40">
            {componentsContent.map((component, index) => (
              <div key={index} className="h-full min-h-[200px]">
                <div className="component-card h-full rounded-xl px-20 py-5 border border-gray-800 bg-[#0F172A]/40 flex flex-col items-center text-center">
                  <span className="text-3xl mb-4">{component.icon}</span>
                  <h1 className={`text-xl mb-2 ${robotoBold.className}`}>
                    {component.title}
                  </h1>
                  <p className="text-gray-300">{component.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.main>
  );
}
