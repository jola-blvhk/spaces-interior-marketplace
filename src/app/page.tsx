"use client";

import ReduxProvider from "@/redux/redux-provider";

import LogRocket from "logrocket";
LogRocket.init("iolmf1/spaces-interior-marketplace");
export default function Home() {
  return (
    <ReduxProvider>
      <div></div>
    </ReduxProvider>
  );
}
