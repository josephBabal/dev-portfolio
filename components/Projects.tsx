import React from 'react'
import styles from '@/styles/projects.module.css'
import ProjectCard from '@/components/Project-card'
import projectsJson from '@/data/projects.json'
import { Project } from '@/types/types'

const Projects = () => {
  const projects: Project[] = projectsJson

  return (
    <div className={`max-width-primary ${styles.container}`}>
      <h2 className={styles.title}> Projects </h2>

      <div className={`${styles.grid}`}>
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects