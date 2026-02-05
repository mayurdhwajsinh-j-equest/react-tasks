import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favourite color is : {color} !!</h1>
            <button type="button" onClick={() => { 
                setColor("red")
            }}>RED</button>
            <button type="button" onClick={(e) => {
                setColor("blue")
            }}>BLUE</button>
            <button type="button" onClick={() => { 
                setColor("green") 
            }}>GREEN</button>
        </>
    );
}

export default App
