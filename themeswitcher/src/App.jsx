
import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './context/Themecontext.js'
import Themebtn from "./components/Themebtn"
import Card from './components/Card'

function App() {
const [thememode,setthememode]=useState("light")

const lightmode =()=>{
  setthememode("light")
}
const darkmode= ()=>{
  setthememode("dark")
}

// actuall change in theme
useEffect(() => {
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('body').classList.remove("light","dark")

  document.querySelector('html').classList.add(thememode)
  document.querySelector('body').classList.add(thememode)
}, [thememode])


  return (
    <>
    <Themeprovider value={{thememode,darkmode,lightmode}}>
        <div className="flex flex-wrap min-h-screen items-center">
                        <div className="w-full">
                            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <Themebtn/>
                            </div>

                            <div className="w-full max-w-sm mx-auto">
                              <Card/>
                            </div>
                        </div>
                    </div>
    </Themeprovider>
    </>
  )
}

export default App
