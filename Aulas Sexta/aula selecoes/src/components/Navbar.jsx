import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Marujos</Link>
        <Link to="/Entrevista">Entrevista</Link>
        {/* <Link to="/home">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link> */}
    </nav>
  )
}

export default Navbar
