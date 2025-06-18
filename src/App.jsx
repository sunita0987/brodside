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
    </>
  )
}
export default App
