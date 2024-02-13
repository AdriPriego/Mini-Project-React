import iconoCasa from "../assets/img/icono-casa.png"
import iconoApartamentos from "../assets/img/icono-apartamentos.png"
import iconoVilla from "../assets/img/villa.webp"
import iconoChalet from "../assets/img/chalet.png"
import iconoBungalows from "../assets/img/bungalows.png"
import Logo from "../assets/img/logo.png"
import React from 'react'

function Sidebar() {
  return (
    <aside>
        <a href=''>
            <img src={iconoCasa} alt="iconocasa" width={"20px"}/>
            Casas
        </a>
        <a href=''>
            <img src={iconoApartamentos} alt="" width={"20px"}/>
            Apartamentos
        </a>
        <a href=''>
            <img src={iconoVilla} alt="" width={"20px"}/>
            Villas
        </a>
        <a href=''>
        <img src={iconoChalet} alt="" width={"20px"}/>
            Chalets
        </a>
        <a href=''>
        <img src={iconoBungalows} alt="" width={"20px"}/>
            Bungalows
        </a>
    </aside>
  )
}

export default Sidebar