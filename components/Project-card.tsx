import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/projects.module.css'
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { CustomVisibleEase } from '@/utils/config';
import { text } from 'stream/consumers';


type ProjectCardProps = {
  name: string;
  subtitle: string;
  page: string;
  website: string | null;
  github: string;
  image: string;
  imageMobile: string;
}

const overlayVariants = {
  hidden: { height: "100%" },
  visible: { height: 0, transition: { duration: 1, ease: CustomVisibleEase } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: CustomVisibleEase } },
};



const ProjectCard = ({ name, subtitle, page, github, image, imageMobile}: ProjectCardProps) => {
  const imageRef = useRef(null);
  // const desktopCardRef = useRef(null);
  
  const imageInView = useInView(imageRef, { once: true, amount: 0.2 });
  // const desktopCardInView = useInView(desktopCardRef, { once: true, amount: 0.2 });

  const textRef = useRef(null);
  // const textDesktopRef = useRef(null);
  
  const textInView = useInView(textRef, { once: true, amount: 1 });

  // const textDesktopInView = useInView(textMobileRef, { once: true, amount: 1 });


  const [currentImage, setCurrentImage] = useState(image);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 850) {
        setCurrentImage(imageMobile);
      } else {
        setCurrentImage(image);
      }
    };

    // Set initial image
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [image, imageMobile]);

  return (
    <Link className={styles.card} href={github}>
      {/* <img 
        src={image} 
        srcSet={`${imageMobile} 768w, ${image} 1440w`}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw" 
        alt="Your Image Description" 
        style={{objectFit: "cover", maxWidth: '576px', width: '100%' }}
        decoding="async" 
        loading="lazy"
      /> */}
      <div 
        className={`${styles.image_container}`}
        ref={imageRef}
      >

        <motion.div 
          className={`${styles.overlay}`} 
          variants={overlayVariants}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
        />

          <img 
            className={`${styles.image}`}  
            src={currentImage}
            ref={textRef}
            loading="lazy"

          />
      </div>
{/* 
      <div 
        className={`${styles.image_container} ${styles.imageDesktop}`}
        ref={desktopCardRef}
      > 

        <motion.div 
          className={`${styles.overlay}`} 
          variants={overlayVariants}
          initial="hidden"
          animate={desktopCardInView ? "visible" : "hidden"}
        />

          <img 
            className={`${styles.image}`}
            src={image}
            ref={textDesktopRef}
          />  
      </div> */}

      <motion.div 
        className={styles.content}
        variants={textVariants}
        initial="hidden"
        animate={textInView ? "visible" : "hidden"}
      >
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.subtitle}> {subtitle}</p>
      </motion.div>
    </Link>
  )
}

export default ProjectCard