import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { MotionDiv } from "@/components/MotionDiv";
import { DELAY } from "@/utils/config";

const HomeVariants = {
  hidden: { display: 'none'},
visible: { display: 'block', transition: { duration: 0.5, ease: "easeIn", delay: DELAY } },
}


export default async function Home() {
  return (
    <main className={styles.main}>
      <MotionDiv variants={HomeVariants}
        initial='hidden'
        animate='visible'
      > 
        <Hero />
        <Projects />
      </MotionDiv>
    
    </main>
  );
}
