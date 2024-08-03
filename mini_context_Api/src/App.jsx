
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UsercontextProvider from "./context/Usercontextprovider"

function App() {


  return (
    <>
    <UsercontextProvider>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Login/>
    <Profile/>
    </UsercontextProvider>
    </>
  )
}

export default App

