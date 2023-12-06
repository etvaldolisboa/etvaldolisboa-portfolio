import React from 'react'
import { NavegationBar } from './style'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <>
      <NavegationBar>
        <li>
          <Link>home</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>abilities</Link>
        </li>
        <li>
          <Link>projects</Link>
        </li>
        <li>
          <Link>contact</Link>
        </li>
      </NavegationBar>

    </>
  )
}