// app/MainLayout.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/Loading-screen";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import CustomCursor from "@/components/CustomCusor";
import { usePathname, useRouter } from "next/navigation";
import PageTransition from "../PageTransition";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [isPageTransition, setIsPageTransition] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => {
      setIsPageTransition(true);
    };

    const handleComplete = () => {
      setIsPageTransition(false);
    };

    handleStart(); // Trigger the transition start

    // Use a timeout to simulate the transition completion
    const timeoutId = setTimeout(() => {
      handleComplete();
      console.log(isPageTransition);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader">
          <LoadingScreen setLoading={setLoading} key={"load"} />
        </motion.div>
      ) : isPageTransition ? (
        <PageTransition />
      ) : (
        <motion.div
          key="content"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* <CustomCursor /> */}
          <Navbar />
          {children}
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
