import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './components/Password.css'
import PasswordGenerator from './components/PasswordGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <PasswordGenerator/>
  </React.StrictMode>,
)
