import styles from "./Banner.module.css";

function Banner({ imagem, link }) {
  const whatsappNumber = "5535998361283";
  const defaultLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a href={link || defaultLink} target="_blank" rel="noopener noreferrer">
      <div
        className={styles.capa}
        style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')` }}
      ></div>
    </a>
  );
}

export default Banner;
