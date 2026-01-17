import { useState } from "react"
import "./App.css"


function App() {
  const [color, setColor] = useState("Black")

  return (
    // <div className="w-full h-screen duration-200"
    // style={{backgroundColor: color}}
    // >
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    //     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    //       <button
    //       onClick={() => setColor("red")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "red"}}
    //       >Red</button>
    //       <button
    //       onClick={() => setColor("green")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "green"}}
    //       >Green</button>
    //       <button
    //       onClick={() => setColor("blue")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "blue"}}
    //       >Blue</button>
    //       <button
    //       onClick={() => setColor("yellow")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "yellow"}}
    //       >Yellow</button>
    //       <button
    //       onClick={() => setColor("pink")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "pink"}}
    //       >Pink</button>
    //         <button
    //       onClick={() => setColor("olive")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "olive"}}
    //       >Olive</button>
    //         <button
    //       onClick={() => setColor("purple")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "purple"}}
    //       >Purple</button>
    //         <button
    //       onClick={() => setColor("gray")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "gray"}}
    //       >Gray</button>
    //         <button
    //       onClick={() => setColor("lavender")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "lavender"}}
    //       >Lavender</button>
    //         <button
    //       onClick={() => setColor("peachpuff")}
    //       className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //       style={{backgroundColor: "peachpuff"}}
    //       >Peach</button>
    //     </div>
    //   </div>
    // </div>

    // Improved Version
    <div
  className="w-full h-screen transition-colors duration-300 ease-in-out"
  style={{ backgroundColor: color }}
>
  <div className="fixed bottom-10 inset-x-0 flex justify-center px-4">
    <div className="flex flex-wrap justify-center gap-3 bg-white/80 backdrop-blur-md shadow-xl px-5 py-3 rounded-full border border-white/40">
      
      {[
        "red", "green", "blue", "yellow", "pink",
        "olive", "purple", "gray", "lavender", "peachpuff"
      ].map((clr) => (
        <button
          key={clr}
          onClick={() => setColor(clr)}
          className="px-4 py-1.5 rounded-full text-sm font-medium shadow-md
                     hover:scale-105 active:scale-95 transition transform"
          style={{
            backgroundColor: clr,
            color: clr === "yellow" || clr === "lavender" || clr === "peachpuff"
              ? "#1f2937"
              : "#ffffff",
          }}
        >
          {clr.charAt(0).toUpperCase() + clr.slice(1)}
        </button>
      ))}

    </div>
  </div>
</div>

  )
}

export default App