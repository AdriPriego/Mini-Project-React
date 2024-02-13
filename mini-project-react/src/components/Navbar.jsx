import Logo from "../assets/img/logo.png"
import React from 'react'

function Navbar() {
  return (
    <nav>
        <img className="logo" src={Logo} alt="logo" width={"120px"}/>
        <h2>IronApartments</h2>
    </nav>
  )
}

export default Navbar