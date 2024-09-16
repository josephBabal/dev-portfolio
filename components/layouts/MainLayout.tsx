// app/layout.tsx
"use client";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/Loading-screen";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCusor";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [loading, setLoading] = useState(true);

  
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader">
          <LoadingScreen setLoading={setLoading} key="loading-screen" /> 
        </motion.div>
      ) : (
        <motion.div key="content" initial="hidden" animate="visible" exit="exit">
          {/* <CustomCursor /> */}
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}


