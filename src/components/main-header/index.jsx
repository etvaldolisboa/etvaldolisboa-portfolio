import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../header-navegation'
import { Header } from './style'

export const MainHeader = () => {
  return (
    <Header>
      <div>
        <Link><h1>etvaldolisboa</h1></Link>
        <Nav />
      </div>
    </Header>
  )
}