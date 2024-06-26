"use client";

import RootLayout from "@/components/Layout";
import FirstSection from "@/components/landing-page/first-section";
import SecondSection from "@/components/landing-page/second-section";
import ReduxProvider from "@/redux/redux-provider";

import LogRocket from "logrocket";
LogRocket.init("iolmf1/spaces-interior-marketplace");
export default function Home() {
  return (
    <ReduxProvider>
      <RootLayout>
        <div className="grid  pt-20 md:pt-32 gap-16 md:gap-20">
          <FirstSection />
          <SecondSection />
        </div>
      </RootLayout>
    </ReduxProvider>
  );
}
