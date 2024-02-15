import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.png"
import React from 'react'

function Navbar() {
  return (
    <nav>
      <Link to={"/"}>
        <img className="logo" src={Logo} alt="logo" width={"120px"}/>
        <h2>IronApartments</h2>
      </Link>
    </nav>
  )
}

export default Navbar