// app/layout.tsx
"use client";

import type { Metadata } from "next";
import { Inter, DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/Loading-screen";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCusor";
const inter = Inter({ subsets: ["latin"] });
// const dmSans = DM_Sans({ subsets: ['latin'] });
const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  preload: true,
  display: 'swap'
});

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true);

  
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div key="loader">
            <LoadingScreen setLoading={setLoading} key="loading-screen" /> 
          </motion.div>
        ) : (
          <motion.div key="content" initial="hidden" animate="visible" exit="exit">
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>

      </body>
    </html>
  );
}


