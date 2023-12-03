import styled from "styled-components";
import '../../styles/root.css'

export const Header = styled.header`
  color: var(--white);
  background-color: var(--color-bw-800-opacity);
  backdrop-filter: var(--global-backdrop-filter);
  position: fixed;
  width: 100%;
  z-index: 10;
  
  div{
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }
`