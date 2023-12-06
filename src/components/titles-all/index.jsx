import styled from "styled-components"
import React from 'react'

export const Title = (props) => {
  const Title = styled.h2`
  text-transform: capitalize;
    padding: 2rem;
    margin: 5rem 0;
    font-size: 4rem;
    text-align: center;
    color: var(--color-bw-50);
    border-radius: var(--radius-app);
    /* border: 1px solid var(--color-bw-800); */
    background-color: var(--color-bw-800-opacity);
    backdrop-filter: var(--global-backdrop-filter);
  `

  return (
    <Title>{props.children}</Title>
  )
}
