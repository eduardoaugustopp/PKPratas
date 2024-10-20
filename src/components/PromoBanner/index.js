import styles from './PromoBanner.module.css';

const PromoBanner = () => {
    return (
        <div className={styles.promoBanner}>
            <p className={styles.promoText}>
                FRETE GRÁTIS A partir de R$99,00 Sul e Sudeste | Encomenda e pronta entrega | 5% DE DESCONTO no Pix
            </p>
        </div>
    );
};

export default PromoBanner;
