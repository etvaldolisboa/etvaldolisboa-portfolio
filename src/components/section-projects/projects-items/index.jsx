import React from 'react'
import { CardProjects } from './style'

export const ItemProjects = ({
  image,
  name,
  description,
  urlLive,
  repos
}) => {
  return (
    <CardProjects>
      <img src={image} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="acess">
        <span>
          <a href={urlLive} target='_blank'>clique aqui live</a>
        </span>
        <span>
          <a href={repos} target='_blank'>reporistiors</a>
        </span>
      </div>

    </CardProjects>

  )
}