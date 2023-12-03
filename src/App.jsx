import React from "react"
import { BrowserRouter } from "react-router-dom"
import { MainHeader } from "./components/main-header"
import { createGlobalStyle } from 'styled-components';
import { Hero } from "./components/main-hero";
import { About } from "./components/main-about";
import Abilities from "./components/main-abilities";
import Projects from "./components/my-projects";
import { Container } from "./container";

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <MainHeader />
          <Hero />
          <About />
          <Abilities />
          <Projects />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App;


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  html{
    scroll-behavior: smooth;
    font-weight: 400;
    color: #000000;
    line-height: 1.15;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
  
  body {
    font-family: Helvetica, sans-serif;
    background-color:var(--color-bw-900);
    color:var(--white);
  }
  
  section{
    border: 1px solid yellow;
    margin: 0 auto;
    max-width:1280px;
  }

  a{
    all: unset;
  }

  ul, li{
    list-style: none;
    all: unset;
  }
`;