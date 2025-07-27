import { useState } from 'react'
import { Router } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import './App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoadingScreen from '../pages/LoadingScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}></Route>
      <Route exact path='search' element={<LoadingScreen></LoadingScreen>}></Route>

    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
