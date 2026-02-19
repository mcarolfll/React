import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Contato from './assets/views/Contato.tsx'
import Nome from './assets/views/Nome.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Nome />
    <Contato />
    <App />
    
  </StrictMode>,
)
