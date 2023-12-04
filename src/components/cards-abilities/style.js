import styled from "styled-components";

export const ListAbilities = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap:wrap ;
`
export const Ability = styled.li`
  color: var(--white);
  color: yellow;
  background-color: var(--color-bw-800-opacity);
  backdrop-filter: var(--global-backdrop-filter);
  flex: 1 0 250px;
  aspect-ratio: 2;
  display: grid;
  font-size: 6rem;
  place-items: center;

  img{
    
    filter: invert(50%) sepia(21%) saturate(2215%) hue-rotate(175deg) brightness(100%) contrast(104%);
    color: red;
    max-width: 200px;
  }
`