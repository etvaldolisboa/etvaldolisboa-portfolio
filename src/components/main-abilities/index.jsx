import React from 'react'
import { Title } from '../titles'

import { AbilitiesSection } from './style'
import { DesingParallax  } from '../desing-parallax'
import { CardsAbilities } from '../cards-abilities'

const Abilities = () => {
  return (
    <AbilitiesSection>
      <Title>abilities</Title>
      <DesingParallax />

      <CardsAbilities/>
    </AbilitiesSection>
  )
}

export default Abilities