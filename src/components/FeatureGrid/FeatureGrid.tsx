import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "../FeatureCard/FeatureCard";

const features = [
  {
    title: "Automated Data Collection",
    description:
      "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
  },
  {
    title: "Monitoring & Reporting",
    description:
      "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
  },
  {
    title: "Monitoring & Reporting",
    description:
      "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
  },
  {
    title: "Simplified Certification Process",
    description:
      "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
  },
];

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1320px] mx-auto px-4">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }} // Starts invisible & moves up
          animate={{ opacity: 1, y: 0 }} // Fades in & moves into place
          transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }} // Staggered effect
        >
          <FeatureCard
            title={feature.title}
            description={feature.description}
          />
        </motion.div>
      ))}
    </div>
  );
};
