import React from "react";
import { Badge } from "../ui/badge";

export const Header = () => {
  return (
    <header className="flex flex-col items-center mb-8 md:mb-16 mt-4 md:mt-8">
      <Badge className="bg-neutral-colorsn0 text-foundation-greeng500 px-4 md:px-[35px] py-2 md:py-2.5 rounded-[23px] mb-3 md:mb-4">
        <span className="[font-family:'DM_Sans',Helvetica] font-bold text-lg md:text-xl">
          FEATURES
        </span>
      </Badge>

      <h1 className="[font-family:'Aeonik_TRIAL-Bold',Helvetica] font-bold text-neutral-colorsn800 text-3xl md:text-[64px] tracking-[-1px] md:tracking-[-3.20px] text-center px-4">
        Why Carbon Crunch?
      </h1>
    </header>
  );
};