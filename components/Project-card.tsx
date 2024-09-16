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
  alt: string;
  onGoing: boolean;
  description: string;
}

const overlayVariants = {
  hidden: { height: "100%" },
  visible: { height: 0, transition: { duration: 1, ease: CustomVisibleEase } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: CustomVisibleEase } },
};



const ProjectCard = ({ name, subtitle, website, page, github, image, imageMobile, alt, onGoing, description }: ProjectCardProps) => {
  const imageRef = useRef(null);  
  const imageInView = useInView(imageRef, { once: true, amount: 0.4 });

  const textRef = useRef(null);

  const textInView = useInView(textRef, { once: true, amount: 1 });


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
    <div className={styles.card}>
      <Link className={styles.link} href={onGoing ? github : website!}>
        <div 
          className={`${styles.image_container}`}
          ref={imageRef}
        >

          <div className={styles.description_container}>
            <p className={styles.description}>{description}</p>
          </div>

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
        {/* </div> */}
        </div>
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
    </div>
  )
}

export default ProjectCard