import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/card";

function App() {
  const statsData = [
    {
      value: "3X",
      description:
        "ESG High Performers Deliver A Higher Total Shareholder Return",
      className: "bg-foundationgreeng-400 top-[131px] left-[831px] z-50",
      valueClassName: "text-neutral-colorsn900 text-[87.9px] tracking-[0.88px]",
      descriptionClassName:
        "text-neutral-colorsn800 text-[29.3px] tracking-[0.29px]",
    },
    {
      value: "98%",
      description: "Of CEOs Agree Sustainability Is Their Responsibility",
      className: "bg-neutral-colorsn800 top-[342px] left-[570px] z-40",
      valueClassName: "text-white text-[55.3px] tracking-[0.55px]",
      descriptionClassName: "text-white text-[31.1px] tracking-[0.31px]",
    },
    {
      value: "18%",
      description:
        "Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050",
      className: "bg-neutral-colorsn800 top-[476px] left-[831px] z-30",
      valueClassName:
        "text-white text-[51.4px] tracking-[0.51px] text-right ml-auto",
      descriptionClassName:
        "text-white text-[25.7px] text-right tracking-[0.26px]",
    },
    {
      value: "37%",
      description:
        "Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track",
      className: "bg-neutral-colorsn0 top-[630px] left-[533px]",
      valueClassName:
        "text-foundationgreeng-400 text-5xl tracking-[0.48px] z-20",
      descriptionClassName:
        "text-foundation-greeng500 text-2xl tracking-[0.24px]",
    },
  ];

  return (
    <div className="bg-[#f5f5f8] flex flex-row justify-center w-full">
      <div className="bg-[#f5f5f8] w-[1440px] h-[925px] relative">
        {/* Background Image with Animation */}
        <motion.img
          className="absolute w-[818px] h-[925px] bottom-0 left-0"
          alt="Rectangle"
          src="/rectangle-4403.png"
          initial={{ x: 100, y: 100, opacity: 0, rotate: 10, scale: 0.8 }}
          whileInView={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }} // Smooth retrigger
        />

        {/* Stats Cards with Optimized Animations */}
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0, rotate: -5, scale: 0.8 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            viewport={{ once: false, amount: 0.5 }} // Smooth trigger
            className={`absolute rounded-[11px] ${stat.className} shadow-lg ${
              index === 2
                ? "flex flex-col items-end"
                : "flex flex-col items-start"
            } ${
              index === 0
                ? "w-[446px]"
                : index === 1
                ? "w-[492px]"
                : index === 2
                ? "w-[380px]"
                : "w-[446px]"
            }`}
          >
            <Card>
              <CardContent
                className={`flex flex-col ${
                  index === 2 ? "items-end" : "items-start"
                } gap-[10px] px-4 py-[10px] w-full`}
              >
                <motion.div
                  className={`relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold ${stat.valueClassName} leading-[normal]`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.4 }}
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  className={`relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal ${stat.descriptionClassName} leading-[normal]`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  viewport={{ once: false, amount: 0.4 }}
                >
                  {stat.description}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
