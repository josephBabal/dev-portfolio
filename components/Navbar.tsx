import Link from 'next/link'
import React from 'react'
import styles from '@/styles/navbar.module.css'
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/MotionDiv'
import { CustomVisibleEase, DELAY, START_DURATION } from '@/utils/config'


const navVariants = {
  hidden: { top: -50 },
  visible: { top: 0,  transition: { duration: 1, ease: CustomVisibleEase, delay: DELAY } },
}

const Navbar = () => {
  return (
    <MotionDiv
      className={styles.navbar}
      variants={navVariants}
      initial='hidden'
      animate='visible'
      onAnimationStart={() => console.log('Navbar animation started')}

      onAnimationComplete={() => console.log('Navbar animation completed')}

    >
      <nav 
        className={`${styles.container} max-width-primary`}
      >
        <Link href='/' className={`nav_link`}>Joseph</Link>
        <Link href='/about' className={`nav_link`}>About me</Link>
      </nav>
    </MotionDiv>
  )
}

export default Navbar