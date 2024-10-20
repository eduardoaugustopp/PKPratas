import styles from "./Inicio.module.css";
import Menu from "components/Menu";
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Categoria from "components/Categoria";
import Card from "components/Card";
import { useEffect, useState } from "react";
import PromoBanner from "components/PromoBanner";

function Inicio() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/eduardoaugustopp/PKPratas/videos"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);
  return (
    <div>
      <Menu />
      <Banner imagem="home" />
      <PromoBanner />
      <Categoria />
      <Titulo>
        <h1>
          Adicione ao carrinho e confira a demonstração clicando na imagem
        </h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((imagem) => {
          return <Card {...imagem} key={imagem.id} />;
        })}
      </section>
    </div>
  );
}

export default Inicio;
