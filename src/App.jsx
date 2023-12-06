import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from 'styled-components';
import { Header } from "./components/section-header"
import { Hero } from "./components/section-hero";
import { About } from "./components/section-about";
import { Abilities } from "./components/section-abilities";
import { Projects } from "./components/section-projects";
import { Container } from "./container";

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <Header />
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
    max-width:1440px;
  }

  a{
    all: unset;
  }

  ul, li{
    list-style: none;
    all: unset;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: 700;
    text-transform: capitalize;
  }
`;