import styles from './Hero.module.css'


const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* <img className={styles.imageBG} src="src\assets\images\472855250_18385158553111985_8443145874024625318_n.jpg" alt="a" />*/}
      <div className={styles.container}>
        <div className={styles.title_block}>
          <h6 className={styles.subtitle}> РЕСТОРАН ВЫСОКОЙ КУХНИ С СОБСТВЕННОЙ ВИНОТЕКОЙ </h6>
          <h1 className={styles.title}> Искусство гастрономии в атмосфере уединения </h1>
          <p className={styles.text}> Изысканные вкусовые сочетания, авторская подача от шеф-повара и безупречный сервис на юге исторического центра. </p>
        </div>
      </div>
    </div>
    )
}

export default Hero;
