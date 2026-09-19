import './App.css'
import LogoContainer from './Components/Logo-container/Logo-container'
import Navbar from './Components/Navbar/Navbar'
import HeaderActions from './Components/HeaderActions/HeaderActions'
import Hero from './Components/Hero/Hero'
import PopularDishes from './Components/HomePageComp/popular-dishes/PopularDishes'
import { Routes, Route } from 'react-router'
import ModalCastom from './Components/ModalCastom/ModalCastom'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ModalCastom name="button" open={open} onClose={() => setOpen(false)} />
      <header className="header">
        <LogoContainer />
        <Navbar />
        <HeaderActions setOpenModal={setOpen} />
      </header>


      {/* <Hero />*/}

      <Routes>
        <Route path="/" element={<><Hero /><PopularDishes /></>} />
        <Route path="/menu" element={<HeaderActions />} />
      </Routes>
    </>
  )
}

export default App;
