import React from 'react'
import styles from '@/styles/projects.module.css'
import Link from 'next/link';


type ProjectCardProps = {
  name: string;
  subtitle: string;
  page: string;
  website: string | null;
  github: string;
  image: string;
  imageMobile: string;
}


const ProjectCard = ({ name, subtitle, page, image, imageMobile}: ProjectCardProps) => {
  return (
    <Link className={styles.card} href={page}>
      {/* <img 
        src={image} 
        srcSet={`${imageMobile} 768w, ${image} 1440w`}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 100vw" 
        alt="Your Image Description" 
        style={{objectFit: "cover", maxWidth: '576px', width: '100%' }}
        decoding="async" 
        loading="lazy"
      /> */}
      
      <img className={`${styles.image} ${styles.imageMobile}`}  src={imageMobile} />
      <img className={`${styles.image} ${styles.imageDesktop}`} src={image} />

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.subtitle}> {subtitle}</p>
      </div>
    </Link>
  )
}

export default ProjectCard