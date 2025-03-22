import React from "react";
import { Header } from "../../components/Header/Header";
import { FeatureGrid } from "../../components/FeatureGrid/FeatureGrid";

export const Desktop = (): JSX.Element => {
  return (
    <main className="bg-[#f5f5f8] flex flex-row justify-center w-full">
      <div className="bg-[#f5f5f8] overflow-hidden w-full max-w-[1440px] min-h-screen py-6 md:py-10">
        <div className="relative w-full">
          <Header />
          <FeatureGrid />
        </div>
      </div>
    </main>
  );
};