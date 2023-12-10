import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/searchpage'>Hjem</Link>
      <Link to='/searchpage'>Oppskriftfinner</Link>
      <Link to='/searchpage'>Om meg</Link>
      <Link to='/searchpage'>Ta kontakt!</Link>
    </div>
  )
}

export default Navbar