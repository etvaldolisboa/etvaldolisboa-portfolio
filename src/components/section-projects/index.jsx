import React, { useState } from 'react'
import { Title } from '../titles-all'
import { SectionProjects } from './style'
import { ListProjects } from '../section-projects/projects-list-items'
import dataProjectsJson from '../../../public/projects.json'

export const Projects = () => {
  const [projectsItems] = useState(dataProjectsJson.projects)

  return (
    <SectionProjects>
      <Title>projects</Title>

      <ListProjects projectsItems={projectsItems}/>

    </SectionProjects>
  )
}