import Footer from './components/Footer'
import Navbar from './components/Navbar'
import React from 'react'
import Sidebar from './components/Sidebar'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Footer />
    </div>
  )
}

export default Homepage