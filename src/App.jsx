import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Sidebare from './Sidebare/Sidebare'
import Home from './Home/Home'

function App() {
  const [open, setopen] = useState(false);
  const openSideBare = () => {
    setopen(!open)
  }


  return (
    <>
    <div className="grid-container">
      <Header openSideBare={openSideBare}/>
      <Sidebare open={open} openSideBare={openSideBare}/>
      <Home />
    </div>
    </>
  )
}

export default App
