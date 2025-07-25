import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "remixicon/fonts/remixicon.css";
import './index.css'
import Home from './pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
