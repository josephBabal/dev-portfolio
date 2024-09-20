"use client";

import React, { useRef } from "react";
import experienceData from "@/data/experience.json";
import styles from "@/styles/about-descriptions.module.css";
import { motion, useInView } from "framer-motion";

const titleVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const experienceVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
  },
};

type calcDataProps = {
  start: number;
  end: number;
  current: boolean;
};
const AboutExperience = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.5 });

  const calcData = ({ start, end, current }: calcDataProps) => {
    const duration = start === end && start;

    if (current) {
      return "Present";
    } else {
      return `${duration}`;
    }
  };

  return (
    <div className={`max-width-primary  ${styles.container} p-inline-0`}>
      <div className={`${styles.content}`} ref={cardRef}>
        <motion.h2
          className={`${styles.title} h4`}
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Work experience
        </motion.h2>

        {experienceData.map((experience) => (
          <motion.div
            className={`${styles.experience_container}`}
            key={experience.id}
            variants={experienceVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <p className={`${styles.experience_company} h6 `}>
              {" "}
              {experience.company}{" "}
            </p>
            <p className={`${styles.experience_position} h6`}>
              {" "}
              {experience.position}{" "}
            </p>
            <p className={`${styles.experience_duration} h6`}>
              {" "}
              {calcData({
                start: experience.startDateYear,
                end: experience.endDateYear,
                current: experience.current,
              })}{" "}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutExperience;
