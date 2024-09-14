import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { MotionDiv } from "@/components/MotionDiv";
import { DELAY } from "@/utils/config";
import SectionFooterLayout from "@/components/layouts/SectionFooterLayout";
import ScrollSection from "@/components/layouts/ScrollSection";

const HomeVariants = {
  hidden: { display: 'none'},
visible: { display: 'block', transition: { duration: 0.5, ease: "easeIn", delay: DELAY } },
}


export default async function Home() {
  return (
    <main className={styles.main}>
      
      <Hero />
   
      <Projects />
    </main>
  );
}
