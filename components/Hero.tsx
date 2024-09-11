import React from 'react'
import styles from '@/styles/hero.module.css'
import HeroIcons from '@/components/Hero-icons'
import { MotionDiv } from './MotionDiv'
import { CustomEase, DELAY, START_DURATION } from '@/utils/config'
import OverflowHiddenContainer from './Overflow-hidden-container'

const textVariants = {
  hidden: { y: 150 },
  visible: { y: 0, transition: { duration: START_DURATION, ease: CustomEase, delay: DELAY } },
}

const textVariants2 = {
  hidden: { y: 150 },
  visible: { y: 0, transition: { duration: START_DURATION, ease: CustomEase, delay: DELAY+0.06 } },
}

const Hero = async() => {
  return (
    <div className={`max-width-primary ${styles.container}`}>
      <h1>
        <OverflowHiddenContainer>
          <MotionDiv 
            className={`${styles.title}`}
            variants = {textVariants}
            initial='hidden'
            animate='visible'
          > 
            Joseph Babal 
          </MotionDiv> 
        </OverflowHiddenContainer>
      </h1>

      <h2 className={`${styles.subhead}`}> 
        <OverflowHiddenContainer>
          {/* <OverflowHiddenContainer> */}
            <MotionDiv 
              variants={textVariants}
         
            
            > A full-stack developer that  
            </MotionDiv>
        
            <MotionDiv
              variants={textVariants2}
            >
              loves to build and learn 
            </MotionDiv>
          {/* </OverflowHiddenContainer> */}
        </OverflowHiddenContainer>

      </h2>    

      <HeroIcons />
    </div>
  )
}

export default Hero