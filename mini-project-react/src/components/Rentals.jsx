
import List from "./List";



function Rentals(props) {
  
  const handleRemoveRental = (indiceAlBorrar) => {
    console.log("pulsando", indiceAlBorrar);

    let cloneRentalDataArr = JSON.parse(JSON.stringify(props.currentRental));

    cloneRentalDataArr.splice(indiceAlBorrar, 1);

    props.setCurrentRental(cloneRentalDataArr);
  };

  

  return (

    <div>
        
        <List 
            currentRental={props.currentRental}
            setCurrentRental={props.setCurrentRental}
            handleRemoveRental={handleRemoveRental}
        
        />
        
  
    </div>
  );
}

export default Rentals;
