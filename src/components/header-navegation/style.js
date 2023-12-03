import styled from "styled-components";

export const NavegationBar = styled.ul`
  display: flex;

  li{
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    text-transform: capitalize;
    border-bottom: 2px solid transparent;
    
    &:hover{
      color: var(--main-primary);
      border-color: var(--main-primary);
      text-shadow: 0rem 0rem .2rem var(--main-primary);
    }
  }
`