import styles from "./Rodape.module.css";
import whatsappIcon from "./whatsapp.png";
import instagramIcon from "./instagram.png";

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <section className={styles.rodape__empresa}>
        <h2 className={styles.rodape__titulo}>PKPratas</h2>
        <ul className={styles.rodape__lista}>
          <li>
            <a href="/sobre" className={styles.rodape__link}>
              Sobre
            </a>
          </li>
          <li>
            <a href="/depoimentos" className={styles.rodape__link}>
              Depoimentos de Clientes
            </a>
          </li>
          <li>
            <a href="/politica-de-entrega" className={styles.rodape__link}>
              Política de entrega
            </a>
          </li>
          <li>
            <a href="/politica-frete-gratis" className={styles.rodape__link}>
              Política de frete grátis
            </a>
          </li>
          <li>
            <a href="/garantia" className={styles.rodape__link}>
              Garantia
            </a>
          </li>
          <li>
            <a href="/como-comprar" className={styles.rodape__link}>
              Como comprar
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.rodape__contato}>
        <h2 className={styles.rodape__titulo}>Atendimento</h2>
        <ul className={styles.rodape__lista}>
          <li>
            <a
              href="https://wa.me/5535998361283"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsappIcon} alt="ícone do whatsapp" />
            </a>
          </li>
          <li>
            <span className={styles.rodape__link}>
            Segunda a Sexta: 07:00 às 21:00
            </span>
          </li>
          <li>
            <span className={styles.rodape__link}>
            Sábado e Domingo: 07:00 às 12:00
            </span>
          </li>
        </ul>
      </section>

      <section className={styles.rodape__redesSociais}>
        <h2 className={styles.rodape__titulo}>Rede Social</h2>
        <ul className={`${styles.rodape__lista} ${styles.redesSociais__lista}`}>
          <li>
            <a
              href="https://www.instagram.com/pk_pratas01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="ícone do instagram" />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
}

export default Rodape;
