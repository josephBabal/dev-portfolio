"use client";

import React from 'react'
import styles from '@/styles/about-hero.module.css'
import OverflowHiddenContainer from '../Overflow-hidden-container'
import { MotionDiv } from '../MotionDiv'
import { motion } from 'framer-motion'


const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeIn" } },
}

const imgVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeIn", delay: 0.3 } },
}

const AboutHero = () => {
  return (
    <div className={`${styles.container} max-width-primary`}>
      <div className={`${styles.text_container}`}>
        {/* <OverflowHiddenContainer> */}
          <MotionDiv 
            className={`${styles.text_little}`}
            variants={textVariants}
            initial='hidden'
            animate='visible'
          >
            Hi, I'm 
          </MotionDiv>
        {/* </OverflowHiddenContainer> */}

        {/* <OverflowHiddenContainer> */}
          <motion.h1 
            className={`${styles.text_big}`}
            variants={textVariants}
            initial='hidden'
            animate='visible'
          > Joseph Babal </motion.h1>
        {/* </OverflowHiddenContainer> */}
      </div>
      <MotionDiv 
        variants={imgVariants}
        initial='hidden'
        animate='visible'
      >
        <OverflowHiddenContainer>
        <img
          className={`${styles.img}`}
          src="/img/gggg.jpg" 
        />
      </OverflowHiddenContainer>
      </MotionDiv>
    </div>
  )
}

export default AboutHero