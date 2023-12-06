import React from 'react'
import { ItemProjects } from '../projects-items'
import { ListOfProjects } from './style'

export const ListProjects = ({ projectsItems }) => {
  return (
    <ListOfProjects>
      {
        projectsItems.length > 0 ? (
          projectsItems.map((projects, index) => (
            <ItemProjects
              key={index}
              image={projects.image}
              name={projects.name}
              description={projects.description}
              urlLive={projects.urlLive}
              repos={projects.repos}
            />
          ))
        ) : <h1>sem nada</h1>
      }
    </ListOfProjects>
  )
}
// <ItemProjects/>
// <ItemProjects/>