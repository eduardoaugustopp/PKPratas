import styles from "./Favoritos.module.css";
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";
import { useFavoritoContext } from "contextos/Favoritos";

function Favoritos() {
  const { favorito } = useFavoritoContext();

  return (
    <>
      <Banner
        imagem="favoritos"
        link={`https://www.instagram.com/pk_pratas01`}
      />
      <Titulo>
        <h1>Confira seus itens e finalize seu pedido</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav) => (
          <Card {...fav} key={fav.id} />
        ))}
      </section>
    </>
  );
}

export default Favoritos;
