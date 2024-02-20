import { useState } from "react";
import { useNavigate } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import placeHolder from "../assets/img/placeholder.jpeg"
import { Link } from "react-router-dom";




function FormAdd(props) {

  const navigate = useNavigate()

  const [inputName, setInputName] = useState("");
  const [inputBarrio, setInputBarrio] = useState("");
  const [inputCiudad, setInputCiudad] = useState("");
  const [inputPais, setInputPais] = useState("");
  const [inputTipo, setInputTipo] = useState("");
  const [inputTipohab, setInputtipohab] = useState("")
  const [inputHabitaciones, setInputHabitaciones] = useState(1);
  const [inputCamas, setInputCamas] = useState(1);
  const [inputBaños, setInputBaños] = useState(1);
  const [inputCapacidad, setInputCapacidad] = useState(1);
  const [inputPrecio, setInputPrecio] = useState(20);
  const [inputDescripcion, setInputDescripcion] = useState("");
  const [inputSituacion, setInputSituacion] = useState("");
  const [inputImg, setInputImg] = useState("")

  const handleNameChange = (event) => {
    setInputName(event.target.value)
  }
  const handleBarrioChange = (event) => {
    setInputBarrio(event.target.value)
  }
  const handleCiudadChange = (event) => {
    setInputCiudad(event.target.value)
  }
  const handlePaisChange = (event) => {
    setInputPais(event.target.value)
  }
  const handleTipoChange = (event) => {
    setInputTipo(event.target.value)
  }
  const handleTipohabChange = (event) => {
    setInputtipohab(event.target.value)
  }
  const handleHabitacionesChange = (event) => {
    setInputHabitaciones(event.target.value)
  }
  const handleCamasChange = (event) => {
    setInputCamas(event.target.value)
  }
  const handleBañosChange = (event) => {
    setInputBaños(event.target.value)
  }
  const handleCapacidadChange = (event) => {
    setInputCapacidad(event.target.value)
  }
  const handlePrecioChange = (event) => {
    setInputPrecio(event.target.value)
  }
  const handleDescripcionChange = (event) => {
    setInputDescripcion(event.target.value)
  }
  const handleSituacionChange = (event) => {
    setInputSituacion(event.target.value)
  }
  const handleImgChange = (event) => {
    setInputImg(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nuevoApartamento = {
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
      id: Math.floor(Math.random() * 7000000),
      picture_url: {
        url: inputImg
      }
    }
    console.log(nuevoApartamento)

    if (nuevoApartamento.picture_url.url === "") {
      nuevoApartamento.picture_url.url = placeHolder
    } 

    console.log(nuevoApartamento)

    props.setCurrentRental((valorActualdelEstado) => {
      console.log(valorActualdelEstado)

      let clone = JSON.parse(JSON.stringify(valorActualdelEstado))
      clone.unshift(nuevoApartamento)
      return clone
    })
    console.log(nuevoApartamento)

    navigate("/")

  };

  return (
    <div>
      <h1>Añade aquí tu apartamento en alquiler</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name"
            onChange={handleNameChange}
            value={inputName}
          />
        </div>
        <div>
          <div>Localización</div>
          <label htmlFor="name">Barrio: </label>
          <input type="text" name="name"
            onChange={handleBarrioChange}
            value={inputBarrio}
          />
          <label htmlFor="name">Ciudad: </label>
          <input type="text" name="name"
            onChange={handleCiudadChange}
            value={inputCiudad}
          />
          <label htmlFor="name">País: </label>
          <input type="text" name="name"
            onChange={handlePaisChange}
            value={inputPais}
          />
        </div>
        <div>
          <label htmlFor="name">Tipo de alojamiento: </label>
          <input type="text" name="name"
            onChange={handleTipoChange}
            value={inputTipo}
          />
        </div>
        <div>
          <label htmlFor="name">Tipo de habitaciones: </label>
          <input type="text" name="name"
            onChange={handleTipohabChange}
            value={inputTipohab}
          />
        </div>
        <div>
          <label htmlFor="number">Número de habitaciones: </label>
          <input type="number" name="name"
            onChange={handleHabitacionesChange}
            value={inputHabitaciones}
          />
        </div>
        <div>
          <label htmlFor="number">Número de camas: </label>
          <input type="number" name="name"
            onChange={handleCamasChange}
            value={inputCamas}
          />
        </div>
        <div>
          <label htmlFor="number">Número de cuartos de baño: </label>
          <input type="number" name="name"
            onChange={handleBañosChange}
            value={inputBaños}
          />
        </div>
        <div>
          <label htmlFor="number">Capacidad: </label>
          <input type="number" name="name"
            onChange={handleCapacidadChange}
            value={inputCapacidad}
          />
        </div>
        <div>
          <label htmlFor="price">Precio: </label>
          <input type="number" name="name"
            onChange={handlePrecioChange}
            value={inputPrecio}
          />
        </div>
        <div className="descripcion">
          <label htmlFor="name">Descripción del alojamiento: </label>
          <input type="text" name="name"
            onChange={handleDescripcionChange}
            value={inputDescripcion}
          />
        </div>
        <div className="descripcion">
          <label htmlFor="name">Situación geográfica: </label>
          <input type="text" name="name"
            onChange={handleSituacionChange}
            value={inputSituacion}
          />
        </div>
        <div className="imagen">
          <label htmlFor="name">Imagen: </label>

          <input type="url" placeholder="Imagen del alojamiento" name="name"
            onChange={handleImgChange}
            value={inputImg}
          />
        </div>

        <Button
          type="submit"
          variant="outline-danger"
        >
          Añadir
        </Button>
      </form>
    </div>
  );
}

export default FormAdd;
