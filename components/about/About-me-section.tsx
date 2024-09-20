import React from "react";
import professionalData from "@/data/about-professionally.json";
import personalData from "@/data/about-personally.json";
import AboutDescriptions from "@/components/about/About-descriptions";
import styles from "@/styles/about-descriptions.module.css";
import AboutExperience from "./About-experience";

const AboutMeSection = () => {
  return (
    <div className={`max-width-primary ${styles.section}`}>
      <AboutDescriptions
        title={professionalData.title}
        description={professionalData.description}
      />
      <AboutDescriptions
        title={personalData.title}
        description={personalData.description}
      />
      <AboutExperience />
    </div>
  );
};

export default AboutMeSection;
