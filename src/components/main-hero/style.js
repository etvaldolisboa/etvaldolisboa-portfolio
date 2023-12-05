import styled from "styled-components";


export const HeroSection = styled.section`
  display:flex;
  min-height:100vh;
  align-items:center;
  justify-content:space-between;
  gap: 2rem;
  
  @media (max-width:768px) {
    flex-direction:column;
    justify-content:center;
  }
  `
export const TextHome = styled.div`
  color:var(--white);
  z-index: 1;

  h1{
    color:var(--main-primary);
    font-size: clamp(3.2rem, 3.5rem + 1.5vw, 5rem);
  }
  
  h2{
    font-size:1.5rem;
  }
  
  .description{
    font-family: 'Courier New', Courier, monospace;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    font-weight: 300;
  }
  `
  export const ListIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 2.4rem 0;gap:.8rem;
 `
  export const Icons = styled.li`
    padding: 10px;
    width:75px;
    aspect-ratio: 1 / 1;
    border: 1px solid transparent;
    background-color: var(--color-bw-800-opacity);
    backdrop-filter: var(--global-backdrop-filter);
    display: grid;
    place-items: center;
    border-radius: var(--radius-app);
    cursor: pointer;

    img{
      filter: invert(100%);
    }

    &:hover{
      border-color: var(--main-primary);
      img{
        filter: invert(46%) sepia(42%) saturate(2057%) hue-rotate(190deg) brightness(100%) contrast(100%);
      }
  }
`
export const CardCode = styled.div`
  padding: 2vh 2vw;
  font-size: .8rem;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.75;
  color: var(--color-bw-50);
  backdrop-filter: var(--global-backdrop-filter);
  border-radius: var(--radius-app);
  background-color: var(--color-bw-800-opacity);
  border: 1px solid transparent;

  @media (max-width:375px) {
    display: none;
  }
`
export const IconHome = styled.span`
  background: linear-gradient(0deg, var(--main-primary), var(--color-blue-marine)100%);
  background-size: contain;
  // z-index: -1;
  height: 768px;
  right: 0;
  top: 0;
  color: red;
  position: absolute;
  width: 500px;
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 0 50%);
`