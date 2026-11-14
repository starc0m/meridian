import styles from './Aboute.module.css'
import hall from './../../assets/hall.png'

const Aboute = () => {
  return (
    <>
      <div className={styles.container} >
        <div className={styles.texts}>
          <h6 className={styles.subtitle}>Атмосфера Меридиана</h6>

          <h1 className={styles.title}>Где время замедляет свой ход</h1>

          <p className={styles.description}>Интерьер нашего ресторана спроектирован как тихая гавань в сердце мегаполиса. Стеклянный купол над каминной зоной, натуральный тесаный камень, обилие живой зелени и скрытые приватные кабинеты создают ауру исключительности.</p>
          <p className={styles.description}>Каждый вечер у нас звучит мягкий живой джаз, а освещение настраивается индивидуально для каждого столика, чтобы ваш ужин прошел в идеальной уединенной обстановке.</p>

        </div>


        <div className={styles.imgBlock}><img className={ styles.img } src={hall}/></div>

      </div>
    </>
  )
}

export default Aboute;
