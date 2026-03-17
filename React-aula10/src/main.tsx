import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/css/cursos.css'
import './components/css/home.css'
import './App.css'
import './assets/teste.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
