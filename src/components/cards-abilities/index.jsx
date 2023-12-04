// import React from 'react'
import { Ability, ListAbilities } from './style'

import reactIcon from '../../assets/icons/react-icon.svg'
import gitIcon from '../../assets/icons/git-icon.svg'
import gitHubIcon from '../../assets/icons/github-icon.svg'
import jsIcon from '../../assets/icons/javascript-icon.svg'
import vueJSIcon from '../../assets/icons/vuejs-icon.svg'
import cssIcon from '../../assets/icons/css-icon.svg'


export const CardsAbilities = () => {
  return (
    <>
      <ListAbilities>
        <Ability>
          <img src={reactIcon} alt="icon react" />
        </Ability>
        <Ability>
          <img src={gitIcon} alt="icon git" />
        </Ability>
        <Ability>
          <img src={gitHubIcon} alt="icon github" />
        </Ability>
        <Ability>
          <img src={jsIcon} alt="icon javascript" />
        </Ability>
        <Ability>
          <img src={cssIcon} alt="icon css3" />
        </Ability>
        <Ability>
          <img src={vueJSIcon} alt="icon vuejs" />
        </Ability>
      </ListAbilities>
    </>
  )
}