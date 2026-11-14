import { Routes, Route } from 'react-router'
import { useState, useEffect } from 'react'

import LogoContainer from './Components/Logo-container/Logo-container'
import Navbar from './Components/Navbar/Navbar'
import HeaderActions from './Components/HeaderActions/HeaderActions'
import SidePanel from './Components/SidePanel/SidePanel'
import Home from './pages/Home'
import { HiBars3 } from "react-icons/hi2";


import styles from './App.module.css'

function App() {
  const [openSidePanel, setOpenSidePanel] = useState(false)
  const [size, setSize] = useState("lg")

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 700) {
        setSize("sm");
      } else if (width < 1200) {
        setSize("md");
      } else {
        setSize("lg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={styles.h}>
        {size === "lg" ? (
          <>
            <LogoContainer />
            <Navbar />
            <HeaderActions/>
          </>
        ) : size === "md" ? (
          <>
              <LogoContainer />

              {/* Burger menu */}
              <span  onClick={() => setOpenSidePanel(!openSidePanel)} open={openSidePanel}>
               <HiBars3 color='white' size={'32px'}/>
              </span>
          </>
        ) : (
            <>
                <LogoContainer />

                {/* Burger menu */}
                <span className={styles.burger} onClick={() => setOpenSidePanel(!openSidePanel)} open={openSidePanel}>
                 <HiBars3 color='white' size={'32px'}/>
                </span>
            </>
        )}
      </header>

      <SidePanel className={styles.sidePanel} open={openSidePanel} onClose={() => setOpenSidePanel(false)} />

      <Routes>
        <Route path="/" element={<><Home /></>} />


      </Routes>
    </>
  )
}

export default App;
