import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from './header-navegation'
import { MainHeader } from './style'

export const Header = () => {
  return (
    <MainHeader>
      <div>
        <Link><h1>EL</h1></Link>
        <Nav />
      </div>
    </MainHeader>
  )
}