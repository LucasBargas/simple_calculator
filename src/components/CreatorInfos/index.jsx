import styles from './styles.module.scss';

const CreatorInfos = () => (
  <section className={styles.CreatorInfosContainer}>
    <p>
      Esta calculadora foi desenvolvida com <span>♥</span> por{' '}
      <a
        href="https://projetoslucasbargas.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lucas Bargas
      </a>
    </p>
    <a
      href="https://github.com/LucasBargas/simple_calculator"
      target="_blank"
      rel="noopener noreferrer"
    >
      Clique aqui para visualizar o repositório no GitHub
    </a>
  </section>
);

export default CreatorInfos;
