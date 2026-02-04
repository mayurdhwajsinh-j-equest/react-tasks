import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const shoot = ()=>{
    alert("Shoot button clicked");
  }

  return (
    <>
        <button onClick={shoot}>Click Me to SHOOT</button>      
    </>
  )
}

export default App
