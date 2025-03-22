import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const Desktop = (): JSX.Element => {
  // Data for statistic cards
  const statsData = [
    {
      value: "3X",
      description:
        "Esg High Performers Deliver A Higher Total Shareholder Return",
      className: "bg-foundationgreeng-400 top-[131px] left-[831px]",
      valueClassName: "text-neutral-colorsn900 text-[87.9px] tracking-[0.88px]",
      descriptionClassName:
        "text-neutral-colorsn800 text-[29.3px] tracking-[0.29px]",
    },
    {
      value: "98%",
      description: "Of Ceos Agree Sustainability Is Their Responsibility",
      className: "bg-neutral-colorsn700 top-[342px] left-[570px]",
      valueClassName: "text-white text-[55.3px] tracking-[0.55px]",
      descriptionClassName:
        "text-neutral-colorsn40 text-[31.1px] tracking-[0.31px]",
    },
    {
      value: "18%",
      description:
        "Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050",
      className: "bg-neutral-colorsn800 top-[476px] left-[831px]",
      valueClassName: "text-white text-[51.4px] tracking-[0.51px]",
      descriptionClassName:
        "text-neutral-colorsn40 text-[25.7px] text-right tracking-[0.26px]",
    },
    {
      value: "37%",
      description:
        "Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track",
      className: "bg-neutral-colorsn0 top-[630px] left-[533px]",
      valueClassName: "text-foundationgreeng-400 text-5xl tracking-[0.48px]",
      descriptionClassName:
        "text-foundation-greeng500 text-2xl tracking-[0.24px]",
    },
  ];

  return (
    <div className="bg-[#f5f5f8] flex flex-row justify-center w-full">
      <div className="bg-[#f5f5f8] w-[1440px] h-[925px]">
        <div className="relative w-[1277px] h-[925px] left-[26px]">
          <img
            className="absolute w-[818px] h-[925px] top-0 left-0"
            alt="Rectangle"
            src="/rectangle-4403.png"
          />

          {statsData.map((stat, index) => (
            <Card
              key={index}
              className={`absolute rounded-[11px] ${stat.className} ${
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
              <CardContent
                className={`flex flex-col ${
                  index === 2 ? "items-end" : "items-start"
                } gap-[10px] px-4 py-[10px] w-full`}
              >
                <div
                  className={`relative self-stretch mt-[-1.00px] [font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold ${stat.valueClassName} leading-[normal]`}
                >
                  {stat.value}
                </div>
                <div
                  className={`relative self-stretch [font-family:'DM_Sans',Helvetica] font-normal ${stat.descriptionClassName} leading-[normal]`}
                >
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
