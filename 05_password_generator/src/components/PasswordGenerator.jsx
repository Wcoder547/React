import { useCallback, useEffect, useRef, useState } from "react"

const PasswordGenerator = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true)
  const [charAllowed, setCharAllowed] = useState(true)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|:;<>?,."
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="container">
        <h2 className="text-white text-center text-3xl font-bold">Password Generator</h2>
        <input 
          type="text" 
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white text-center text-2xl" 
          placeholder="password"
          value={password} 
          readOnly 
          ref={passwordRef}
        />
        <div className="length range__slider" data-min={8} data-max={32}>
          
          <input 
            id="slider" 
            type="range" 
            min={6} 
            max={32} 
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))} 
          />
        </div>
        <div className="settings">
          <div className="setting">
            <input 
              type="checkbox" 
              id="number" 
              checked={numberAllowed} 
              onChange={() => setNumberAllowed(prev => !prev)} 
            />
            <label htmlFor="number">Include Numbers</label>
          </div>
          <div className="setting">
            <input 
              type="checkbox" 
              id="symbol" 
              checked={charAllowed} 
              onChange={() => setCharAllowed(prev => !prev)} 
            />
            <label htmlFor="symbol">Include Symbols</label>
          </div>
        </div>
        <button className="btn generate" onClick={passwordGenerator}>Generate Password</button>
        <button className="btn generate" onClick={copyPasswordToClipboard}>Copy Password</button>
      </div>
    </>
  )
}

export default PasswordGenerator
