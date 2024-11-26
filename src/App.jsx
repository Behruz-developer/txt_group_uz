import React from 'react'
import Nav from './Components/Nav/Nav'
import Upcoming from './Components/Upcoming/Upcoming'
import Catalog from './Components/Catalog/Catalog'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav/>
      <Upcoming/>
      <Catalog/>
      <Footer/>
    </div>
  )
}

export default App
