import React from 'react'
import styled from 'styled-components'

export const DesingStreak = () => {

 const DesingStreak = styled.span`
    position: absolute;
    background: linear-gradient(134deg, var(--color-blue-marine), var(--main-primary)99%);
    transform: skewY(-3deg);
    right: 0px;
    left: 0px;
    width: 100%;
    min-height: 450px;
    max-height: 630px;
    z-index: -99;
    transition: all .1s ease-in-out;
`
  return (
    <DesingStreak/>
  )
}