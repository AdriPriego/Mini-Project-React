import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import RentalDetails from './pages/RentalDetails'
import NotFound from './pages/NotFound'
import About from './pages/About'
import { useState } from 'react'
import rentalData from "./data/rentals.json";
import FormAdd from './pages/FormAdd'
import 'bootstrap/dist/css/bootstrap.min.css';
import Favoritos from './pages/Favoritos'
// importa el JSON y usarlo para ver la info SOLO se hace aqui una vez

let rentalDataArr = rentalData.results

function App() {

  // console.log(rentalDataArr)
  
  const [currentRental, setCurrentRental] = useState(rentalDataArr);


  return (
    <div>
      
      <Navbar />
      <Sidebar />
      

      <div className='posicionamiento'>

        <Routes>
        <Route path={"/"} element={<Homepage 
          currentRental={currentRental}
          setCurrentRental={setCurrentRental}
        />} />
        <Route path={`/rental/:rentalId`} element={ <RentalDetails 
        currentRental={currentRental}
        setCurrentRental={setCurrentRental}
        />}/>
        <Route path={"/form"} element={ <FormAdd 
        currentRental={currentRental}
        setCurrentRental={setCurrentRental}
        /> } />
        <Route path={"/favoritos"} element={ <Favoritos /> }/>
        <Route path={"/about"} element= {<About />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
      </div>
      
  
      <Footer />
    </div>
  )

}

export default App
