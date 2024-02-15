import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css'
import Homepage from '../src/pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import RentalDetails from './pages/RentalDetails'
import NotFound from './pages/NotFound'
import About from './pages/About'


function App() {

  return (
    <div>
      
      <Navbar />
      <Sidebar />
      
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/:rentalId"} element={ <RentalDetails />}/>
        <Route path={"*"} element={<NotFound />} />
        <Route path={"/about"} element= {<About />} />
      </Routes>
  
      <Footer />
    </div>
  )

}

export default App
