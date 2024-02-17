import React from 'react'

function ListItem(props) {

  const { name, priceImg, picture_url, property_type, country, city, bedrooms, beds, bathrooms, price } = props.eachObj


  let h3Style = {
    fontSize: "20px",
  };

  return (
    <div>
        <h3 style={h3Style}>
                {name} <img src={priceImg} width={"25px"} />{" "}
              </h3>

              <img src={picture_url.url} width={"400px"} />
              <h5>Tipo de alojamiento: {property_type}</h5>
              <h5>Country: {country}</h5>
              <h5>City: {city}</h5>
              <h5>bedrooms: {bedrooms}</h5>
              <h5>beds: {beds}</h5>
              <h5>bathrooms: {bathrooms}</h5>
              <h5>price: {price} €</h5>
    </div>
  )
}

export default ListItem