import React from "react";
import { StarIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <Card className="bg-neutral-colorsn0 rounded-xl h-full">
      <CardContent className="flex flex-col items-start gap-4 md:gap-6 p-4 md:p-6">
        <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url(/circle-2.svg)] bg-[100%_100%] flex items-center justify-center">
          {/* <StarIcon className="text-foundationgreeng-400 w-[25px] h-[28px] md:w-[30px] md:h-[33px]" /> */}
          <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[url(/circle-2.svg)] bg-[100%_100%] flex items-center justify-center">
          <img
            src="/combined-shape.svg"
            alt="Combined Shape"
            className="w-[25px] h-[28px] md:w-[30px] md:h-[33px]"
          />
        </div>
        </div>

        <div className="flex flex-col items-start gap-2 md:gap-4 w-full">
          <h3 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-foundationgreeng-400 text-xl md:text-2xl">
            {title}
          </h3>
          <p className="[font-family:'DM_Sans',Helvetica] font-normal text-neutral-colorsn800 text-sm md:text-base">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};