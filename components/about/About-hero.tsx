"use client";

import React from "react";
import styles from "@/styles/about-hero.module.css";
import OverflowHiddenContainer from "../Overflow-hidden-container";
import { motion } from "framer-motion";
import { CustomVisibleEase } from "@/utils/config";

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: CustomVisibleEase } },
};

const imgVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: CustomVisibleEase, delay: 0.2 },
  },
};

const AboutHero = () => {
  return (
    <div className={`${styles.container} max-width-primary`}>
      <div className={`${styles.text_container}`}>
        {/* <OverflowHiddenContainer> */}
        <motion.div
          className={`${styles.text_little}`}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Hi, I&apos;m
        </motion.div>

        <motion.h1
          className={`${styles.text_big}`}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Joseph Babal
        </motion.h1>
      </div>
      <motion.div variants={imgVariants} initial="hidden" animate="visible">
        <OverflowHiddenContainer>
          <img className={`${styles.img}`} src="/img/profile.jpg" alt="Joseph Babal"/>
        </OverflowHiddenContainer>
      </motion.div>
    </div>
  );
};

export default AboutHero;
