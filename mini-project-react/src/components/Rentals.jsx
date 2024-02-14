import rentalData from "../data/rentals.json";
import moneda1 from "../assets/img/moneda1.png";
import moneda2 from "../assets/img/moneda2.png";
import moneda3 from "../assets/img/moneda3.png";

import { useState } from "react";


let rentalDataArr = rentalData.results;

function Rentals() {
  const [currentRental, setCurrentRental] = useState(rentalDataArr);

  const handleRemoveRental = (indiceAlBorrar) => {
    console.log("pulsando", indiceAlBorrar);

    let cloneRentalDataArr = JSON.parse(JSON.stringify(currentRental));

    cloneRentalDataArr.splice(indiceAlBorrar, 1);

    setCurrentRental(cloneRentalDataArr);
  };

  let style = {
    textAlign: "center",
    padding: "20px",
  };

  let h3Style = {
    fontSize: "20px",
  };

  return (
    <div>

        
   {currentRental.map((eachObj, index) => {
        let priceImg;
        if (eachObj.price < 80) {
          priceImg = moneda1;
        } else if (eachObj.price > 80 && eachObj.price < 110) {
          priceImg = moneda2;
        } else {
          priceImg = moneda3;
        }

        return (
          <div key={eachObj.id} style={style}>
            <h3 style={h3Style}>
              {eachObj.name} <img src={priceImg} width={"25px"} />{" "}
            </h3>

            <img src={eachObj.picture_url.url} width={"400px"} />
            <h5>Tipo de alojamiento: {eachObj.property_type}</h5>
            <h5>Country: {eachObj.country}</h5>
            <h5>City: {eachObj.city}</h5>
            <h5>bedrooms: {eachObj.bedrooms}</h5>
            <h5>beds: {eachObj.beds}</h5>
            <h5>bathrooms: {eachObj.bathrooms}</h5>
            <h5>price: {eachObj.price} €</h5>

            <button onClick={() => handleRemoveRental(index)}>❌</button>

            <hr />
          </div>
        );
      })}   
    </div>
  );
}

export default Rentals;
