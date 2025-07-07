import React from 'react'
import '../Styles/Create.css'
import img from '../images/create.jpg'

function Create() {
  return (
    <>
      <div className='createcontainer'>
        <h1>CREATE</h1>
        <p>Start your journey by creating something new.</p>
        <button className='create-button'>Get Started</button>
      </div>

      <div className='create-container'>
        <img src={img} alt="Create" />
        <div className='create-content'>
          <h1>Create Something Amazing</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum.</p>
        </div>
      </div>
    </>
  )
}

export default Create
