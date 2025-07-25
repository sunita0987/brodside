import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './components/Header.jsx'
import Ready from './components/Ready.jsx'
import Journey from './components/Journey.jsx'
import Copy from './components/Copy.jsx'
import Broadside from './components/BroadSide.jsx'
import Start from './components/Start.jsx'
import Team from './components/Team.jsx'
import ReconnectSection from './components/ReconnectSection.jsx'
import Partners from './components/Partners.jsx'
import Footer from './components/Footer.jsx'
function App() {

  return (
    <>
    <Header/>
    <Ready/>
    <Journey/>
    <Copy/>
    <Broadside/>
    <Start/>
    <Team/>
    <ReconnectSection/>
    <Partners/>
    <Footer/>
    </>
  )
}
export default App
