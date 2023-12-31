import React from 'react'
import { Title } from '../titles-all'
import { DesingStreak } from '../desing/streak'
import me from '../../assets/images/foto-perfil.png'
import { AboutImage, AboutMe, TextAbout, AboutSection } from './style'

export const About = () => {
  return (
    <AboutSection>
      <Title>about</Title>
      <DesingStreak />

      <AboutMe>
        <AboutImage src={me} alt='image profile' />
        <TextAbout>
          <p>
            Oi, meu nome é 
            <span> Etvaldo Freitas Lisboa, sou um desenvolvedor FrontEnd autoditato do Brasil. </span> 
            Sou apaixonado por criar interfaces de usuário bonitas e eficientes, e estou sempre procurando novas
            maneiras de melhorar minhas habilidades.
            Eu venho construindo coisas na web desde quando eu estava no ensino medio, eu fiz inúmeros projetos
            paralelos e eu também possuo poderes mágicos de usar o react para construir interfaces
            de usuário deliciosas.
            Tenho experiência com uma variedade de tecnologias, incluindo HTML, CSS, JavaScript, React, Angular,
            Vue.js, Photoshop e Procreate. Eu também amo fazer desenvolvimento de código aberto, podendo ser
            conferidos em meu repositorio do
            <a href="https://github.com/etvaldolisboa" target="_blank">GitHub</a>.
          </p>

          <a className='linkCV' href="cv">Donwload CV</a>
        </TextAbout>
      </AboutMe>
    </AboutSection>
  )
}