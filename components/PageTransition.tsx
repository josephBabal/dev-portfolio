import { motion } from "framer-motion";
import styles from "@/styles/MainLayout.module.css";

const pageTransitionVariants = {
  hidden: { 
  }, 
  visible: {
    transition: { 
      staggerChildren: 0.1,
      ease: "easeOut" 
    }
  },
  exit: {
    transition: { 
      delayChildren: 0.35,
      staggerChildren: 0.1,
      staggerDirection: -1,
      ease: "easeOut",
    },
  },
}

const columnTransitionVariants = {
  hidden: { 
    y: "-100%",
  }, 
  visible: {
    y: "0%",
    transition: { 
      duration: 0.3, 
      ease: "easeInOut" 
    }
  },
  exit: {
    y: "-100%",
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    },
  },
}


export default function PageTransition() {
  return (
    <motion.div 
      variants={pageTransitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.column_container}
    >
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={styles.column}
          variants={columnTransitionVariants}
        />
      ))}
    </motion.div>
  );
}
