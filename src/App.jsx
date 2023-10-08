import React from 'react'
import Header from './conponents/header/Header'
import Nav from './conponents/nav/Nav'
import About from './conponents/about/About'
import Experience from './conponents/experience/Experience'
import Services from './conponents/services/Services'
import Portfolio from './conponents/portfolio/Portfolio'
import Testimoinals from './conponents/testimoinals/Testimoinals'
import Contact from './conponents/contact/Contact'
import Footer from './conponents/footer/Footer'
const App = () => {
  return (
      <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      {/* <Portfolio/>
      <Testimoinals/> */}
      <Contact/>
      <Footer/>
      </>
  )
}

export default App
