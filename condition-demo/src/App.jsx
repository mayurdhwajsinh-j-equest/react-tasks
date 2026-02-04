import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(props) {
  const [count, setCount] = useState(0)

  if(props.goal)
  {
    alert("GOAL");
  }
  else
  {
    alert("BETTER LUCK NEXT TIME");
  }
  // /* if else statement
  //     && operator 
  //     ternary operator (condition) ? TRUE : FALSE */

  return (
    <>
      
      
    </>
  )
}

export default App
