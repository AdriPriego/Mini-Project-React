import { useState } from "react";

function ActualizarRental(props) {

  const [inputName, setInputName] = useState(props.eachObj.name);
  const [inputBarrio, setInputBarrio] = useState(props.eachObj.neighbourhood);
  const [inputCiudad, setInputCiudad] = useState(props.eachObj.city);
  const [inputPais, setInputPais] = useState(props.eachObj.country);
  const [inputTipo, setInputTipo] = useState(props.eachObj.property_type);
  const [inputTipohab, setInputtipohab] = useState(props.eachObj.room_type);
  const [inputHabitaciones, setInputHabitaciones] = useState(props.eachObj.bedrooms);
  const [inputCamas, setInputCamas] = useState(props.eachObj.beds);
  const [inputBaños, setInputBaños] = useState(props.eachObj.bathrooms);
  const [inputCapacidad, setInputCapacidad] = useState(props.eachObj.accommodates);
  const [inputPrecio, setInputPrecio] = useState(props.eachObj.price);
  const [inputDescripcion, setInputDescripcion] = useState(props.eachObj.description);
  const [inputSituacion, setInputSituacion] = useState(props.eachObj.space);


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

  const {name, neighbourhood, city, country, property_type, bedrooms, beds, bathrooms, accommodates, price, description, space, id} = props.eachObj 

  const handleSubmit = (event) => {
    event.preventDefault()

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
      space: inputSituacion
    }
    props.setCurrentRental((estadoActual) => {
      const clone = JSON.parse(JSON.stringify(estadoActual))
      clone[props.eachObj.id].name = inputName
      clone[props.eachObj.id].neighbourhood = inputBarrio
      clone[props.eachObj.id].city = inputCiudad
      clone[props.eachObj.id].country = inputPais
      clone[props.eachObj.id].property_type = inputTipo
      clone[props.eachObj.id].room_type = inputTipohab
      clone[props.eachObj.id].bedrooms = inputHabitaciones
      clone[props.eachObj.id].beds = inputCamas
      clone[props.eachObj.id].bathrooms = inputBaños
      clone[props.eachObj.id].accommodates = inputCapacidad
      clone[props.eachObj.id].price = inputPrecio
      clone[props.eachObj.id].description = inputDescripcion
      clone[props.eachObj.id].space = inputSituacion

      return clone
    })
  }
  console.log(props.eachObj.id)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name"
            onChange={props.handleNameChange}
            value={inputName}
          />
        </div>
        <div>
          <div>Localización</div>
          <label htmlFor="name">Barrio: </label>
          <input type="text" name="name"
            onChange={props.handleBarrioChange}
            value={inputBarrio}
          />
          <label htmlFor="name">Ciudad: </label>
          <input type="text" name="name"
            onChange={props.handleCiudadChange}
            value={inputCiudad}
          />
          <label htmlFor="name">País: </label>
          <input type="text" name="name"
            onChange={props.handlePaisChange}
            value={inputPais}
          />
        </div>
        <div>
          <label htmlFor="name">Tipo de alojamiento: </label>
          <input type="text" name="name"
            onChange={props.handleTipoChange}
            value={inputTipo}
          />
        </div>
        <div>
          <label htmlFor="name">Tipo de habitaciones: </label>
          <input type="text" name="name"
            onChange={props.handleTipohabChange}
            value={inputTipohab}
          />
        </div>
        <div>
          <label htmlFor="number">Número de habitaciones: </label>
          <input type="number" name="name"
            onChange={props.handleHabitacionesChange}
            value={inputHabitaciones}
          />
        </div>
        <div>
          <label htmlFor="number">Número de camas: </label>
          <input type="number" name="name"
            onChange={props.handleCamasChange}
            value={inputCamas}
          />
        </div>
        <div>
          <label htmlFor="number">Número de cuartos de baño: </label>
          <input type="number" name="name"
            onChange={props.handleBañosChange}
            value={inputBaños}
          />
        </div>
        <div>
          <label htmlFor="number">Capacidad: </label>
          <input type="number" name="name"
            onChange={props.handleCapacidadChange}
            value={inputCapacidad}
          />
        </div>
        <div>
          <label htmlFor="price">Precio: </label>
          <input type="number" name="name"
            onChange={props.handlePrecioChange}
            value={inputPrecio}
          />
        </div>
        <div className="descripcion">
          <label htmlFor="name">Descripción del alojamiento: </label>
          <input type="text" name="name"
            onChange={props.handleDescripcionChange}
            value={inputDescripcion}
          />
        </div>
        <div className="descripcion">
          <label htmlFor="name">Situación geográfica: </label>
          <input type="text" name="name"
            onChange={props.handleSituacionChange}
            value={inputSituacion}
          />
        </div>

        <button>Añadir</button>
      </form>
    </div>
  )
}

export default ActualizarRental;
