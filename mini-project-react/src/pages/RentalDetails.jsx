import React from 'react'
import { useParams } from 'react-router-dom'

function RentalDetails(props) {
    const paramRental = useParams()
    console.log(paramRental)

    const filterRental = props.currentRental.filter((eachRental) => {
        if (eachRental.id == paramRental.rentalId) {
            return true;
        } else {
            return false
        }
    })
    console.log(filterRental)

    const foundRental = filterRental[0]

    console.log(foundRental)

  return (
    <div className='currentRental'>
        <h1>Bienvendo a {foundRental.name}</h1>
        <div className='imagen-apartamento'>
            <img src={foundRental.picture_url.url} alt={foundRental.name} width={"500px"}/>
            <h3>Localización: {foundRental.neighbourhood !== null ? `${foundRental.neighbourhood},` : " " } {foundRental.city}, {foundRental.country}</h3>
        </div>
        <div className='datos'>
            <h2>Tipo de alojamiento: {foundRental.property_type}</h2>
            <h3>{foundRental.room_type}</h3>
            <h3>Habitaciones: {foundRental.bedrooms}</h3>
            <h3>Camas: {foundRental.beds}</h3>
            <h3>Baños: {foundRental.bathrooms}</h3>
            <h3>Capacidad: {foundRental.accommodates} personas</h3>
            <p id='price'>{foundRental.price}<span id='symbol'>€</span> </p>
        </div>
        <div className='descripciones'>
            <p>{foundRental.description}</p>
            <p>{foundRental.space}</p>
        </div>
    </div>
  )
}

export default RentalDetails