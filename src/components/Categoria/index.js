import styles from "./Categoria.module.css";
import dedeirasImg from './dedeiras.png';
import brincosImg from './brincos.png';
import pingentesImg from './pingentes.png';
import correntesImg from './correntes.png';
import pulseirasImg from './pulseiras.png';
import colaresImg from './colares.png';

function Categoria() {
  return (
    <div className={styles.categoria}>
      <h2 className={styles.titulo}>Navegue por categoria</h2>
      
      <div className={styles.item}>
        <div className={styles.linkItem}>
          <div className={styles.imagens}>
            <img className={styles.imagem} src={dedeirasImg} alt="Dedeiras" />
          </div>
          <div className={styles.nome}>DEDEIRAS</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.linkItem}>
          <div className={styles.imagens}>
            <img className={styles.imagem} src={brincosImg} alt="Brincos" />
          </div>
          <div className={styles.nome}>BRINCOS</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.linkItem}>
          <div className={styles.imagens}>
            <img className={styles.imagem} src={pingentesImg} alt="Pingentes" />
          </div>
          <div className={styles.nome}>PINGENTES</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.linkItem}>
          <div className={styles.imagens}>
            <img className={styles.imagem} src={correntesImg} alt="Correntes" />
          </div>
          <div className={styles.nome}>CORRENTES</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.linkItem}>
          <div className={styles.imagens}>
            <img className={styles.imagem} src={pulseirasImg} alt="Pulseira" />
          </div>
          <div className={styles.nome}>PULSEIRAS</div>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.linkItem}>
          <div className={styles.imagens}>
            <img className={styles.imagem} src={colaresImg} alt="Colares" />
          </div>
          <div className={styles.nome}>COLARES</div>
        </div>
      </div>
    </div>
  );
}

export default Categoria;
