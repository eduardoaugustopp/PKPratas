import PageError from './PageError.png';
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <section className={styles.container}>
            <img src={PageError} alt='Pagina de erro' />
        </section>
    )
}