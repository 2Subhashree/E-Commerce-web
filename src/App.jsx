import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import LandingPage from './pages/LandingPage'
import ScrollToTop from './components/ScrollToTop'

function App() {


  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product/:id' element={<LandingPage/>}/>
    </Routes>
    </BrowserRouter></>
  )
}

export default App
