import { useState } from 'react'
import { Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage></LandingPage>
    </>
  )
}

export default App
