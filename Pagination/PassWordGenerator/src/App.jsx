import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
 
    <div className="w-full max-w-md mx-auto my-10 bg-gray-900 text-gray-100 rounded-2xl shadow-xl p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        🔐 Password Generator
      </h1>
      <div className="flex items-center rounded-xl bg-gray-800 border border-gray-700 mb-6 px-2">
        <input
          type="text"
          value={password}
          className="w-full bg-transparent px-3 py-3 text-lg outline-none text-orange-400 tracking-wider"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />

        <div className="ml-2 bg-gray-900 rounded-lg p-1">
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-semibold rounded-md transition"
          >
            Copy
          </button>
        </div>
      </div>

      <div className="space-y-4 text-sm">

        {/* Length */}
        <div className="flex items-center justify-between gap-4">
          <label className="font-medium">
            Length: <span className="text-orange-400">{length}</span>
          </label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="w-40 cursor-pointer accent-orange-500"
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        {/* Options */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className="accent-orange-500"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="accent-orange-500"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Characters
          </label>
        </div>

      </div>
    </div>


  )
}

export default App
