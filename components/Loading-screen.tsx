import React, { useEffect } from 'react'
import styles from '@/styles/loader.module.css'
import { motion } from 'framer-motion'

const bgVariants = {
  hidden: { y: 0 },
  visible: { 
    y: 0,
    transition: {
      delay: 1.5
    }
  },
  exit: { y: "-100vh", 
  transition: { 
    ease: "easeIn",
    duration: 0.3, 
    delay: 0.35
  } 
  }, 
};

const loadingContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.25,
    }
  },
  exit: { opacity: 0, transition: { duration: 0.75 } },
}

const loadingBarVariants = {
  hidden: { width: '5%' },
  visible: { 
    width: '100%', 
    transition: { 
      duration: 1,
      ease: [0.59, 0.25, 0.12, 1.17]
    }
  },
  exit: { opacity: 0, transition: { duration: 0.75 } },
}

const textVariants = {
  hidden: {
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "afterChildren"
    },
  },
};

const wordVariants = {
  hidden: { 
    y: 100,
  },
  visible: {
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.59, 0.25, 0.12, 1.17],
    }
  },
  exit: {
    y: -100,
    transition: { 
      duration: 0.8, 
      ease: [0.59, 0.25, 0.12, 1.17] 
    }
  },
};




type LoaderProps = {
  setLoading: (value: boolean) => void;
} 


const words = ['Joseph', 'Babal'];  // Array of words

const LoadingScreen = ({ setLoading }: LoaderProps) => {

  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.loading_container}
        variants={bgVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}  
      >
        <div className={`${styles.loading_content}`}>
          <motion.div
            className={`${styles.name}`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            
          >
            {words.map((word, index) => (
              <div key={index} className={`${styles.word}`}>
                <motion.div
                  variants={wordVariants}
                >
                  {word}
                </motion.div>
              </div>
            ))}

          </motion.div>
          <motion.div 
            className={`${styles.loading_bar_container}`}
            variants={loadingContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >    
            <motion.div 
              className={`${styles.loading_bar}`} 
              variants={loadingBarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
          </motion.div>
      
        </div>
      </motion.div>

    </div>
  )
}


export default LoadingScreen