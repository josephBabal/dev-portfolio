"use client";

import React, { useEffect, useRef } from 'react'
import styles from '@/styles/projects.module.css'
import ProjectCard from '@/components/Project-card'
import projectsJson from '@/data/projects.json'
import { Project } from '@/types/types'
import OverflowHiddenContainer from '@/components/Overflow-hidden-container'
import { MotionDiv } from '@/components/MotionDiv'
import { useInView } from 'framer-motion'
import { CustomVisibleEase } from '@/utils/config';



const titleVariants = {
  hidden: { y: 150 },
  visible: { y: 0, transition: { duration: 1, ease: CustomVisibleEase } },
}

const Projects = () => {
  const projects: Project[] = projectsJson

  const titleRef = useRef(null);
  
  const isInView = useInView(titleRef, { once: true, amount: 0 });

  return (
    <div className={`${styles.bg_container}`}>
      <div className={`max-width-primary ${styles.container}`}>
        <OverflowHiddenContainer>
          <MotionDiv
            variants={titleVariants}
            initial='hidden'
            animate={isInView ? "visible" : "hidden"} 
          >
            <h2 className={styles.title}> Projects </h2>
          </MotionDiv>
        </OverflowHiddenContainer>

        <div className={`${styles.grid}`} ref={titleRef}>
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects