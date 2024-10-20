import styles from "./Player.module.css";

import Banner from "components/Banner";
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import NotFound from "pages/NotFound";
import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();

  useEffect(() => {
    fetch(
      `https://my-json-server.typicode.com/eduardoaugustopp/PKPratas/videos?id=${parametros.id}`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        if (dados.length > 0) {
          setVideo(dados[0]);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar vídeo:", error);
      });
  }, [parametros.id]);

  if (!video) {
    return <NotFound />;
  }

  const isShort = video.link.includes("/shorts/");
  const shortEmbedLink = `https://www.youtube.com/embed/${video.link
    .split("/")
    .pop()}`;

  return (
    <>
      <Banner imagem="player" link="mailto:pk.pratas01@gmail.com" />{" "}
      {/* Link para abrir o Gmail */}
      <Titulo>
        <h1>Transforme seu estilo com peças de prata!</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="80%"
          height="500"
          src={isShort ? shortEmbedLink : video.link}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </section>
    </>
  );
}

export default Player;
