import { useState } from "react"

function Btn({ btnText, btnBg, setColor }) {

    return (

        <button
            onClick={() => setColor({ btnText })}
            className={`outline-none px-4 py-1 rounded-full text-white  shadow-lg cursor-pointer ${btnBg === "red" ? "bg-red-500" : btnBg === "green" ? "bg-green-500" : btnBg === "black" ? "bg-black" : btnBg === "gray" ? "bg-gray-950" : "bg-gray-600"}`}
        >
            {btnText}
        </button>

    )
}

export default Btn;
