"use client";

import React, { useRef } from "react";
import styles from "@/styles/about-descriptions.module.css";
import { motion, useInView } from "framer-motion";

type AboutDescriptionsProps = {
  title: string;
  description: string;
};

const titleVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const descriptionVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

const AboutDescriptions = ({ title, description }: AboutDescriptionsProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  return (
    <div className={`max-width-primary  ${styles.container} p-inline-0`}>
      <div className={`${styles.content}`} ref={cardRef}>
        <motion.h2
          className={`${styles.title} h4`}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {title}
        </motion.h2>

        <motion.div
          className={`${styles.description} `}
          variants={descriptionVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p className={`${styles.text} h5`}> {description} </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDescriptions;
