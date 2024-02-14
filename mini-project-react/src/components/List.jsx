

function List(props) {
  return (
    <div>
         {props.map((eachObj, index) => {
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
  )
}

export default List