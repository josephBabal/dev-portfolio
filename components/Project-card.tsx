import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/projects.module.css'
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { CustomVisibleEase } from '@/utils/config';
import { IoIosArrowRoundForward } from "react-icons/io";


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

  // style={{
  //   zIndex: isHovering ? 9999 : 0,
  //   background: isHovering 
  //     ? `linear-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)), transparent 60%` 
  //     : 'none',
  // }}      

  return (
    <div className={styles.card}>
      <Link className={styles.link} href={onGoing ? github : website!}>
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
          <div className={styles.image_wrapper}>
          <img
            className={`${styles.image}`}  
            src={currentImage}
            ref={textRef}
            loading="lazy"
            alt={alt}
          />
          <div className={styles.info_container}>
            <p className={`${styles.info} .h6`}>{description}</p>
            <p className={`${styles.ongoing} font-sm`}> {onGoing ? "Under development" : "Completed"} </p>
          </div>
          </div>
        </div>
        <motion.div 
          className={styles.content}
          variants={textVariants}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
        >
          <div className={styles.name_row}>
            <h3 className={`${styles.name} h5`}>{name}</h3>
            <div className={styles.arrow_wrapper}>
            <IoIosArrowRoundForward className={styles.arrow_icon} />
            </div>
          </div>
          <p className={`subtitle font-sm`}> {subtitle}</p>
        </motion.div>
      </Link>
    </div>
  )
}

export default ProjectCard