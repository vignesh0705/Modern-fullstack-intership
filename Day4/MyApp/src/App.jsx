import './App.css'
import Comp1, { A } from './components/Comp1'
import Comp2 from './components/Comp2'
import React from 'react';
import image from '../public/react-js-life.png'
import Counter from './components/Counter'; 

const App = () => {
  

  return (
    <div className="App">
      {/* {c}
      <Comp1 />
      <Comp2 /> */}
      <Counter />
    </div>
  )
}

export default App
