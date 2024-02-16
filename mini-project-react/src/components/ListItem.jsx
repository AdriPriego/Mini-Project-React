import React from 'react'

function ListItem(props) {

  //const { name, priceImg, picture_url, property_type, country, city, bedrooms, beds, bathrooms, price } = props.eachObj


  let h3Style = {
    fontSize: "20px",
  };

  return (
    <div>
        <h3 style={h3Style}>
                {props.eachObj.name} <img src={props.priceImg} width={"25px"} />{" "}
              </h3>

              <img src={props.eachObj.picture_url.url} width={"400px"} />
              <h5>Tipo de alojamiento: {props.eachObj.property_type}</h5>
              <h5>Country: {props.eachObj.country}</h5>
              <h5>City: {props.eachObj.city}</h5>
              <h5>bedrooms: {props.eachObj.bedrooms}</h5>
              <h5>beds: {props.eachObj.beds}</h5>
              <h5>bathrooms: {props.eachObj.bathrooms}</h5>
              <h5>price: {props.eachObj.price} €</h5>
    </div>
  )
}

export default ListItem