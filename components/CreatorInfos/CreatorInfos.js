import styles from './CreatorInfos.module.scss';

const CreatorInfos = () => {
  return (
    <section className={styles.CreatorInfosContainer}>
      <p>
        Esta calculadora foi desenvolvida com <span>♥</span> por <a href="https://projetoslucasbargas.com/" target="_blank" rel="noopener noreferrer">Lucas Bargas</a>
      </p>
    </section>
  )
}

export default CreatorInfos