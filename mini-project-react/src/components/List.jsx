import { Link } from "react-router-dom";
import moneda1 from "../assets/img/moneda1.png";
import moneda2 from "../assets/img/moneda2.png";
import moneda3 from "../assets/img/moneda3.png";
import ListItem from "./ListItem";
import Fav1 from "../assets/img/estrellaVacia.png"
import Fav2 from "../assets/img/estrellaLlena.png"
//estilos
import Button from 'react-bootstrap/Button';
import { useState } from "react";

function List(props) {

  const [favArr, setFavArr] = useState([]);

  const [favItems, setFavItems] = useState([])

  const [fav, setFav] = useState(false)

  const handleFav = (indiceAlFav) => {
      console.log("pulsando", indiceAlFav);
      





      let cloneRentalDataArr = JSON.parse(JSON.stringify(props.currentRental));

      favArr.splice(indiceAlFav, 0, cloneRentalDataArr[indiceAlFav]);
      
      setFavArr(favArr)
    }
    console.log(favArr)
  
  return (
    <div>
      {props.currentRental.map((eachObj, index) => {
        let priceImg;
        if (eachObj.price < 80) {
          priceImg = moneda1;
        } else if (eachObj.price > 80 && eachObj.price < 110) {
          priceImg = moneda2;
        } else {
          priceImg = moneda3;
        }

        let style = {
          textAlign: "center",
          padding: "20px",
        };

       

        return (
          <div key={eachObj.id} style={style}>
            <Link to={`/rental/${eachObj.id}`}>
              <ListItem 
              eachObj={eachObj}
              setCurrentRental={props.setCurrentRental}
              />
            </Link>
            <Button variant="outline-info" onClick={() => props.handleRemoveRental(index)}>❌</Button>
            <Button variant="outline-warning" onClick={() => handleFav()}>
                <img src={favItems.includes(eachObj) ? Fav2 : Fav1} alt="estrella vacia" width={"30px"}/>
            </Button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default List;
