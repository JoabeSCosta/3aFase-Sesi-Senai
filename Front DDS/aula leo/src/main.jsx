import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EstruturaPagina from './components/EstruturaPagina'
import PaginaFilme from './components/style/Filmes/Index'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <EstruturaPagina />
    <PaginaFilme />
  </StrictMode>,
)
