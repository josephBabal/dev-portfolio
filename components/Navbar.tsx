import Link from 'next/link'
import React from 'react'
import styles from '@/styles/navbar.module.css'
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/MotionDiv'
import { CustomEase, DELAY, START_DURATION } from '@/utils/config'


const navVariants = {
  hidden: { display: "none",top: -50 },
  visible: { top: 0, display: "block", transition: { duration: START_DURATION, delay: DELAY, ease: CustomEase } },
}

const Navbar = () => {
  return (
    <MotionDiv
      className={styles.navbar}
      variants={navVariants}
      initial='hidden'
      animate='visible'
    >
      <nav 
        className={`${styles.container} max-width-primary`}
      >
        <Link href='/'>Joseph</Link>
        <Link href='/about'>About me</Link>
      </nav>
    </MotionDiv>
  )
}

export default Navbar