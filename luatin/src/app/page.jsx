"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/home/hero";
import PhilosophySection from "../components/home/philospy";
import FeaturesSection from "../components/home/feature";
import FunctionalitySection from "../components/home/functionality";
import ComponentsSection from "../components/home/components";
import FAQSSection from "../components/home/FAQS";

export default function Home() {
  return (
    <motion.main className="flex min-h-screen flex-col">
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <FunctionalitySection />
      <ComponentsSection />
      <FAQSSection />
    </motion.main>
  );
}