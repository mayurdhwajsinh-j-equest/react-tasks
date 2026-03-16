import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-3xl font-bold text-red-500">
        Hello Tailwind!
      </h1> */}
      <Card 
        img1= "https://joyorganics.com/products/organic-cbd-gummies"
        h1Text = "IMAGE1"
        pText = "This is Image 1. Hope you have eyes and you can see it."
        btnText = "ADD TO CART"
      />

      <Card 
        img1= "https://joyorganics.com/products/organic-cbd-gummies"
        h1Text = "IMAGE1"
        pText = "This is Image 1. Hope you have eyes and you can see it."
        btnText = "Sold out" 
        disabled = {true} 
      />
      
    </>
  )
}

export default App
  