import React from 'react'
import { Title } from '../titles'

import { AbilitiesSection } from './style'
import { DesingParallax  } from '../desing-parallax'
import { CardsAbility } from '../cards-abilities'

const Abilities = () => {
  return (
    <AbilitiesSection>
      <Title>abilities</Title>
      <DesingParallax />

      <CardsAbility/>
    </AbilitiesSection>
  )
}

export default Abilities