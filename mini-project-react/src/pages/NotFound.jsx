import React from 'react'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div>
        <h1>Oh oh! Parece que te has perdido</h1>
        <Link to={"/"}>
          <button>pincha aquí para volver al inicio</button>
        </Link>
    </div>
  )
}

export default NotFound