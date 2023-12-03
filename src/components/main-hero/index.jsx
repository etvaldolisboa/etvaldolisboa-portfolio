import React from 'react'
import { CardCode, TextHome, HeroSection, IconHome, Icons, ListIcons } from './style'
import github from '../../assets/icons/github-icon.svg'
import linkedin from '../../assets/icons/linkedin-icon.svg'
import codepen from '../../assets/icons/codepen-icon.svg'


export const Hero = () => {
  return (
    <HeroSection>
      <IconHome />
      <TextHome>
        <span>Hi, I'm</span>
        <h1>Etvaldo Lisboa</h1>
        <span className='description'>web developer frontend</span>
        <ListIcons>
          <Icons>
            <a href="https://www.linkedin.com/in/etvaldolisboa/" target="_blank"> <img src={github} alt="logo github" /></a>
          </Icons>
          <Icons>
            <a href="https://github.com/etvaldolisboa" target="_blank" > <img src={linkedin} alt="logo linkedin" /></a>
          </Icons>
          <Icons>
            <a href="https://codepen.io/etvaldolisboa" target="_blank"> <img src={codepen} alt="logo codepen" /> </a>
          </Icons>
        </ListIcons>
      </TextHome>

      <CardCode>
        <pre>1 class <b>Person</b> &#x0007B;</pre>
        <pre>2  constructor&#x00028; &#x00029; &#x0007B; </pre>
        <pre>3   this.name = "<strong>Etvaldo Lisboa</strong>";</pre>
        <pre>4   this.traits = &#x0005B;"<b>DESIGN</b>", "<b>DEV</b>"&#x0005D;;</pre>
        <pre>5   this.age = new Date&#x00028; &#x00029;.getFullYear&#x00028; &#x00029; - 1996;</pre>
        <pre>6  &#x0007D;</pre>
        <pre>7 &#x0007D;</pre>
      </CardCode>
    </HeroSection>
  )
}