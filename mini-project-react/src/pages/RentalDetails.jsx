import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ActualizarRental from '../components/ActualizarRental'
//estilos
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

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

    const [isUpdateFormShowing, setIsUpdateFormShowing] = useState(false)

    const handleToggleUpdateForm = () => {
        setIsUpdateFormShowing(!isUpdateFormShowing)
    }

    
    const [open, setOpen] = useState(false)

    console.log(props.currentRental)  
    

    return (
        <div className='currentRental'>
            <h1>Bienvendo a {foundRental.name}</h1>
            <div className='imagen-apartamento'>
                <img src={foundRental.picture_url.url} alt={foundRental.name} width={"500px"} />
                <h3>Localización: {foundRental.neighbourhood !== null ? `${foundRental.neighbourhood},` : " "} {foundRental.city}, {foundRental.country}</h3>
            </div>
            <div className='datos'>
                <h2>Tipo de alojamiento: {foundRental.property_type}</h2>
                <h3>{foundRental.room_type}</h3>
                <h3>Habitaciones: {foundRental.bedrooms}</h3>
                <h3>Camas: {foundRental.beds}</h3>
                <h3>Baños: {foundRental.bathrooms}</h3>
                <h3>Capacidad: {foundRental.accommodates} personas</h3>
                <p id='price'>{foundRental.price}<span id='symbol'>€</span> </p>
                <Button  variant="outline-primary" onClick={handleToggleUpdateForm}>Editar Información</Button >
                {isUpdateFormShowing === true ?
                    <ActualizarRental
                        foundRental={foundRental}
                        setCurrentRental={props.setCurrentRental}
                        setIsUpdateFormShowing={setIsUpdateFormShowing}
                    /> : null
                }
            </div>
            <div className='descripciones'>
                <Button 
                variant="outline-primary" onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                >
                    Ver Mas
                </Button>
                <Collapse in={open}>
                <div id="example-collapse-text">
                    {foundRental.description}
                    {foundRental.space}
                </div>
                </Collapse>    
            </div>
        </div>
    )
}

export default RentalDetails