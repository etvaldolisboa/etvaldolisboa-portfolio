import React from 'react'
import styled from 'styled-components'

export const DesingParallax = () => {
  const Parallax = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  z-index: -999;
  
  div{
    line-height: .5rem;
    position: absolute;
    width: 100%;
    height: 64rem;
    overflow-x: hidden;
  }
  span{
      position: absolute;
      user-select: none;
      color: var(--main-primary);
      opacity: .5;
  }
`
  return (
    <Parallax>
      <div>
        <span style={{ top: '00%', left: '45%', fontSize: 20 }}>ES6</span>
        <span style={{ top: '02%', left: '75%', fontSize: 12 }}>antd</span>
        <span style={{ top: '08%', left: '58%', fontSize: 14 }}>CSS3</span>
        <span style={{ top: '10%', left: '02%', fontSize: 25 }}>WebGL</span>
        <span style={{ top: '20%', left: '20%', fontSize: 23 }}>MongoDB</span>
        <span style={{ top: '15%', left: '85%', fontSize: 30 }}>figma</span>
        <span style={{ top: '30%', left: '35%', fontSize: 18 }}>React</span>
        <span style={{ top: '33%', left: '65%', fontSize: 20 }}>blender</span>
        <span style={{ top: '48%', left: '42%', fontSize: 22 }}>ES6</span>
        <span style={{ top: '56%', left: '11%', fontSize: 20 }}>HTML5</span>
        <span style={{ top: '60%', left: '80%', fontSize: 23 }}>antd</span>
        <span style={{ top: '62%', left: '25%', fontSize: 12 }}>CSS3</span>
        <span style={{ top: '78%', left: '50%', fontSize: 14 }}>WebGL</span>
        <span style={{ top: '80%', left: '66%', fontSize: 25 }}>JavaScrispant</span>
        <span style={{ top: '85%', left: '22%', fontSize: 45 }}>MongoDB</span>
        <span style={{ top: '90%', left: '04%', fontSize: 28 }}>MongoDB</span>
        <span style={{ top: '92%', left: '35%', fontSize: 18 }}>React</span>
        <span style={{ top: '95%', left: '90%', fontSize: 8 }}>figma</span>
      </div>
    </Parallax>
  )
}