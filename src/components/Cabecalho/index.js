import { Link } from "react-router-dom";
import logo from "./logo.png";
import carrinho from "./carrinho.png";
import login from "./login.png";
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <input
        type="search"
        placeholder="Digite o que você procura"
        className={styles.searchInput}
      />

<nav>
  <CabecalhoLink url="./">
    <div className="nav-item">
      <img src={login} alt="Login" className={styles.login} />
    </div>
  </CabecalhoLink>
  <CabecalhoLink url="./Favoritos">
    <div className="nav-item">
      <img src={carrinho} alt="Carrinho" className={styles.carrinho} />
    </div>
  </CabecalhoLink>
</nav>

    </header>
  );
}

export default Cabecalho;
