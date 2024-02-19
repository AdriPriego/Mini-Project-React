import { useState } from "react";
//estilos
import Button from 'react-bootstrap/Button';

import placeholder from "../assets/img/placeholder.jpeg"

function ActualizarRental(props) {

  const [inputName, setInputName] = useState(props.foundRental.name);
  const [inputBarrio, setInputBarrio] = useState(props.foundRental.neighbourhood);
  const [inputCiudad, setInputCiudad] = useState(props.foundRental.city);
  const [inputPais, setInputPais] = useState(props.foundRental.country);
  const [inputTipo, setInputTipo] = useState(props.foundRental.property_type);
  const [inputTipohab, setInputtipohab] = useState(props.foundRental.room_type);
  const [inputHabitaciones, setInputHabitaciones] = useState(props.foundRental.bedrooms);
  const [inputCamas, setInputCamas] = useState(props.foundRental.beds);
  const [inputBaños, setInputBaños] = useState(props.foundRental.bathrooms);
  const [inputCapacidad, setInputCapacidad] = useState(props.foundRental.accommodates);
  const [inputPrecio, setInputPrecio] = useState(props.foundRental.price);
  const [inputDescripcion, setInputDescripcion] = useState(props.foundRental.description);
  const [inputSituacion, setInputSituacion] = useState(props.foundRental.space);
  const [inputImg, setInputImg] = useState(props.foundRental.picture_url.url)

  const handleInputName = (event) => {
    setInputName(event.target.value)
  }
  const handleInputBarrio = (event) => {
    setInputBarrio(event.target.value)
  }
  const handleInputCiudad = (event) => {
    setInputCiudad(event.target.value)
  }
  const handleInputPais = (event) => {
    setInputPais(event.target.value)
  }
  const handleInputTipo = (event) => {
    setInputTipo(event.target.value)
  }
  const handleInputTpohab = (event) => {
    setInputtipohab(event.target.value)
  }
  const handleInputHabitaciones = (event) => {
    setInputHabitaciones(event.target.value)
  }
  const handleInputCamas = (event) => {
    setInputCamas(event.target.value)
  }
  const handleInputBaños = (event) => {
    setInputBaños(event.target.value)
  }
  const handleInputCapacidad = (event) => {
    setInputCapacidad(event.target.value)
  }
  const handleInputPrecio = (event) => {
    setInputPrecio(event.target.value)
  }
  const handleInputDescripcion = (event) => {
    setInputDescripcion(event.target.value)
  }
  const handleInputSituacion = (event) => {
    setInputSituacion(event.target.value)
  }
  const handleInputImg = (event) => {
    setInputImg(event.target.value)
  }

  // const {name, neighbourhood, city, country, property_type, bedrooms, beds, bathrooms, accommodates, price, description, space, id} = props.currentRental 

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("probando")

    const updateProductValues = {
      name: inputName,
      neighbourhood: inputBarrio,
      city: inputCiudad,
      country: inputPais,
      property_type: inputTipo,
      room_type: inputTipohab,
      bedrooms: inputHabitaciones,
      beds: inputCamas,
      bathrooms: inputBaños,
      accommodates: inputCapacidad,
      price: inputPrecio,
      description: inputDescripcion,
      space: inputSituacion,
      picture_url: inputImg
    }
    props.setCurrentRental((estadoActual) => {
       const clone = JSON.parse(JSON.stringify(estadoActual))

       const rentalChange = clone.find((eachRental) =>{
        if (eachRental.id === props.foundRental.id) {
          return eachRental
        } else {
          return undefined
        }
       })


       console.log(rentalChange)
      rentalChange.name = inputName
      rentalChange.neighbourhood = inputBarrio
      rentalChange.city = inputCiudad
      rentalChange.country = inputPais
      rentalChange.property_type = inputTipo
      rentalChange.room_type = inputTipohab
      rentalChange.bedrooms = inputHabitaciones
      rentalChange.beds = inputCamas
      rentalChange.bathrooms = inputBaños
      rentalChange.accommodates = inputCapacidad
      rentalChange.price = inputPrecio
      rentalChange.description = inputDescripcion
      rentalChange.space = inputSituacion
      rentalChange.picture_url.url = inputImg

      return clone
     })
  }
  console.log(props.foundRental)



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name"
            onChange={handleInputName}
            value={inputName}
          />
        </div>
        <div>
          <div>Localización</div>
          <label htmlFor="name">Barrio: </label>
          <input type="text" name="name"
            onChange={handleInputBarrio}
            value={inputBarrio}
          />
          <label htmlFor="name">Ciudad: </label>
          <input type="text" name="name"
            onChange={handleInputCiudad}
            value={inputCiudad}
          />
          <label htmlFor="name">País: </label>
          <input type="text" name="name"
            onChange={handleInputPais}
            value={inputPais}
          />
        </div>
        <div>
          <label htmlFor="name">Tipo de alojamiento: </label>
          <input type="text" name="name"
            onChange={handleInputTipo}
            value={inputTipo}
          />
        </div>
        <div>
          <label htmlFor="name">Tipo de habitaciones: </label>
          <input type="text" name="name"
            onChange={handleInputTpohab}
            value={inputTipohab}
          />
        </div>
        <div>
          <label htmlFor="number">Número de habitaciones: </label>
          <input type="number" name="name"
            onChange={handleInputHabitaciones}
            value={inputHabitaciones}
          />
        </div>
        <div>
          <label htmlFor="number">Número de camas: </label>
          <input type="number" name="name"
            onChange={handleInputCamas}
            value={inputCamas}
          />
        </div>
        <div>
          <label htmlFor="number">Número de cuartos de baño: </label>
          <input type="number" name="name"
            onChange={handleInputBaños}
            value={inputBaños}
          />
        </div>
        <div>
          <label htmlFor="number">Capacidad: </label>
          <input type="number" name="name"
            onChange={handleInputCapacidad}
            value={inputCapacidad}
          />
        </div>
        <div>
          <label htmlFor="price">Precio: </label>
          <input type="number" name="name"
            onChange={handleInputPrecio}
            value={inputPrecio}
          />
        </div>
        <div className="descripcion">
          <label htmlFor="name">Descripción del alojamiento: </label>
          <input type="text" name="name"
            onChange={handleInputDescripcion}
            value={inputDescripcion}
          />
        </div>
        <div className="descripcion">
          <label htmlFor="name">Situación geográfica: </label>
          <input type="text" name="name"
            onChange={handleInputSituacion}
            value={inputSituacion}
          />
        </div>
        <div className="imagen">
          <label htmlFor="name">Imagen: </label>
          <input type="url" name="name"
            onChange={handleInputImg}
            value={inputImg !== " " ? inputImg : placeholder}
          />
        </div>

        <Button variant="outline-success"
        type="submit"
        >Confirmar</Button>
      </form>
    </div>
  )
}

export default ActualizarRental;


