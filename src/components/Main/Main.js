import React from 'react'
import Carousel from '../Carusel/Carusel'
import Navbar from '../Navbar/Navbar'

const Main = (props) => {

 const {children} = props
  return (
    <main>
      <Navbar/>
      {children}
      <h1>© Copyright 2022 Veterinaria Tama</h1>
    </main>
  )
}

export default Main