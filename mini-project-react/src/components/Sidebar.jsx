import iconoCasa from "../assets/img/icono-casa.png"
import iconoApartamentos from "../assets/img/icono-apartamentos.png"
import iconoVilla from "../assets/img/villa.webp"
import iconoChalet from "../assets/img/chalet.png"
import iconoBungalows from "../assets/img/bungalows.png"
import Logo from "../assets/img/logo.png"
import addrental from "../assets/img/addrental.png"
import React from 'react'
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside>
        
        <Link to={"/"}>
        <img src={iconoCasa} alt="iconocasa" width={"40px"}/>
            Inicio
        </Link>
        
        
        <Link to={"/form"} className="sidebar">
        <img src={addrental} alt="addrental" width={"40px"}/>  
            Añadir Apartamento
        </Link>


    </aside>
  )
}

export default Sidebar