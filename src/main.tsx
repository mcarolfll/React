import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Aula2 from './views/Aula2.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Aula2 />
  </StrictMode>,
)
