import styles from './Logo-container.module.css'

const LogoContainer = () => {
  return (
    <div className={styles.logo_container}>
      <h1 className={styles.title}>МЕРИДИАН</h1>
      <div className={styles.rectangle}></div>
      <p className={styles.subtitle}>{`REST & BAR`}</p>
    </div>
  )
}

export default LogoContainer;
