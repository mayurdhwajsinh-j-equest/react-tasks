function Btn({ btnText, btnBg, setColor, activeColor }) {
  const isActive = activeColor === btnText;

  return (
    <button
      onClick={() => setColor(btnText)}
      className={`outline-none px-4 py-1 rounded-full shadow-lg cursor-pointer transition-all
        ${isActive 
          ? "bg-white text-black border-2 border-black"
          : `${
              btnBg === "red" ? "bg-red-500" :
              btnBg === "green" ? "bg-green-500" :
              btnBg === "blue" ? "bg-blue-500" :
              btnBg === "gray" ? "bg-gray-500" :
              "bg-black"
            } text-white`
        }
      `}
    >
      {btnText}
    </button>
  );
}

export default Btn;