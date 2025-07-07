import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Explore from './Components/Explore'
import Create from './Components/create'
import Share from './Components/Share'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Explore />
      <Create />
      <Share />
      <div className="footer" style={{
        backgroundColor: "gray",
        color: "black",
        textAlign: "center",
        
      }}>
        <p>© 2023 template4u. All rights reserved.</p>
      </div>  
    </>
  )
}

export default App
