import React from 'react'
import styled from 'styled-components'

export const Container = (props) => {
  const Container = styled.div`
    min-height: 100vh;
    /* display: flex; */
    /* flex-direction: column ; */
    /* justify-content: center; */

    @media (max-width: 1280px) {
      padding: 0 3rem;
    }
    @media (max-width: 768px) {
      display: block;
    }
  `
  return (
    <Container>
      {props.children}
    </Container>
  )
}