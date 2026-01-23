import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { Hello } from "./Hello.jsx"
import { zikofy, ReactWrapper } from "ziko-wrapper/react"

const Zikofied =  zikofy(Hello, {name : 'ziko'})

globalThis.Zikofied = Zikofied

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
