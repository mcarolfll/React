import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/css/cursos.css'
import './components/css/home.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
