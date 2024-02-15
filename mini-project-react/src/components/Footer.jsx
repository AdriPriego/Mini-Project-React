import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
        <footer>
            <a id='enlace' href="https://github.com/AdriPriego/Mini-Project-React">Proyecto Github</a>
            <Link to={"/about"}>
              <p id='about'>Sobre Nosotros</p>
            </Link>
        </footer>
  )
}

export default Footer