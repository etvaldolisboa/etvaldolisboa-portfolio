import React from 'react'
import { Title } from '../titles-all'

import { AbilitiesSection } from './style'
import { DesingParallax  } from '../desing/parallax.jsx'
import { CardsAbilities } from './abilities-list-cards/'

export const Abilities = () => {
  return (
    <AbilitiesSection>
      <Title>abilities</Title>
      <DesingParallax />

      <CardsAbilities/>
    </AbilitiesSection>
  )
}