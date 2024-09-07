import { Link } from "react-router-dom";
import styles from'./Header.module.css'

const isAdmin = false
const estiloTitulo = {
  color: 'red',
  backgroundColor: 'pink'
}

function Header() {
  return (
    <header>
      <h1 style={isAdmin ? estiloTitulo: undefined}>Meu site</h1>
      <h2 className={styles.titulo}>Subtitulo</h2>
      <label htmlFor=""></label>
      <nav>
            <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="">Serviços</Link></li>
            <li><Link to="">Contato</Link></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
