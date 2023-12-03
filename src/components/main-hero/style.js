import styled from "styled-components";


export const HeroSection = styled.section`
  display:flex;
  min-height:100vh;
  align-items:center;
  justify-content:space-between;
  gap: 2rem;
  
  @media (max-width:768px) {
    flex-direction: column;
    justify-content:center;
  }
  `
export const TextHome = styled.div`
  color:var(--white);
  z-index: 1;

  span{
    display:block;
    font-size:1.5rem;
  }

  .description{
    text-transform: uppercase;
    letter-spacing: 0.6rem;
    // font-weight: 300;
    color: var(--color-bw-500)
  }

  h1{
    font-weight:900;
    color:var(--main-primary);
    font-size:5rem;
  }

`
export const CardCode = styled.div`
  padding: 2vw;
  font-size: .8rem;
  font-family: 'Courier New', Courier, monospace;
  line-height: 1.75;
  color: var(--color-bw-50);
  backdrop-filter: var(--global-backdrop-filter);
  border-radius: var(--radius-app);
  background-color: var(--color-bw-800-opacity);
  border: 1px solid var(--color-bw-700);
`
export const IconHome = styled.span`
  background: linear-gradient(0deg, var(--main-primary), var(--color-blue-marine)99%);
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
export const ListIcons = styled.ul`
display: flex;
justify-content: space-between;

  `
export const Icons = styled.li`

padding: 10px;
width:75px;
aspect-ratio: 1 / 1;
border: 1px solid red;
/* filter: invert(69%) sepia(2%) saturate(0%) hue-rotate(140deg) brightness(92%) contrast(89%); */
background-color: red;
display: grid;
place-items: center;

  
  `