
import React from 'react'

import Rentals from '../components/Rentals'



function Homepage(props) {
  return (
    <div>
        <Rentals 
        currentRental={props.currentRental}
        setCurrentRental={props.setCurrentRental}
        />
        
    </div>
  )
}

export default Homepage