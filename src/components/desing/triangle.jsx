import React from 'react'
import styled from 'styled-components'

export const IconHome = () => {
  const IconHome = styled.span`
  background: linear-gradient(0deg, var(--main-primary), var(--color-blue-marine)100%);
  background-size: contain;
  height: 768px;
  right: 0;
  top: 0;
  color: red;
  position: absolute;
  width: 500px;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 50%);
`
  return (
    <IconHome></IconHome>
  )
}