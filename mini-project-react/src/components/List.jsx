import { Link } from "react-router-dom";
import moneda1 from "../assets/img/moneda1.png";
import moneda2 from "../assets/img/moneda2.png";
import moneda3 from "../assets/img/moneda3.png";
import ListItem from "./ListItem";

function List(props) {
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
            <button onClick={() => props.handleRemoveRental(index)}>❌</button>
            
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default List;
