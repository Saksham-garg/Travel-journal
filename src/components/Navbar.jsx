import React from 'react'
import Travel from './travel.png'

export default function Navbar() {
  return (
    <nav>
        <img alt="travel" src={Travel}></img>
        <span>My Travel Journal</span>
    </nav>
  )
}
