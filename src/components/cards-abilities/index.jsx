import React from 'react'
import { Card, ListAbilities } from './style'

import reactIcon from '../../assets/icons/react-icon.svg'
import gitIcon from '../../assets/icons/git-icon.svg'
import gitHubIcon from '../../assets/icons/github-icon.svg'
import jsIcon from '../../assets/icons/javascript-icon.svg'
import vueJSIcon from '../../assets/icons/vuejs-icon.svg'
import cssIcon from '../../assets/icons/css-icon.svg'


export const CardsAbility = () => {
  return (
    <>
      <ListAbilities>
        <Card>
          <img src={reactIcon} alt="icon react" />
        </Card>
        <Card>
          <img src={gitIcon} alt="icon git" />
        </Card>
        <Card>
          <img src={gitHubIcon} alt="icon github" />
        </Card>
        <Card>
          <img src={jsIcon} alt="icon javascript" />
        </Card>
        <Card>
          <img src={cssIcon} alt="icon css3" />
        </Card>
        <Card>
          <img src={vueJSIcon} alt="icon vuejs" />
        </Card>
      </ListAbilities>
    </>
  )
}