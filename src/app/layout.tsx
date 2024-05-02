"use client";

import type { Metadata } from "next";
import { Poppins, Megrim } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ReduxProvider from "@/redux/redux-provider";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const megrim = Megrim({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-megrim",
});

// export const metadata: Metadata = {
//   title: "Spaces Interior Market Place",
//   description: "an interior marketplace",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <Head>
        <title>Spaces Interior Market Place</title>
      </Head>
      <html lang="en">
        <body className={` ${poppins.variable} ${megrim.variable}`}>
          <Header />
          {children}
        </body>
      </html>
    </ReduxProvider>
  );
}
