import styles from './Howblock.module.css'
import { FaRegCheckCircle } from "react-icons/fa";


function Howblock() {


    return (
        <>
            <div className={styles.countainer}>
                <div className={styles.header}>
                    <h6 className={styles.subtitle}>Быстро & Просто</h6>
                    <h1 className={styles.title}>Как забронировать визит</h1>
                    <p className={styles.text}>Всего за три простых шага вы гарантируете себе идеальный вечер в нашем ресторане без лишнего ожидания.</p>
                </div>
                <div className={styles.cardlist}>
                    <div className={styles.card}>
                        <div className={styles.head}>
                            <h1>01</h1>

                            <FaRegCheckCircle color='gray' size={'20px'}/>
                        </div>
                        <section className={styles.info}>
                            <h4>Выберите параметры</h4>
                            <p>Определите подходящую дату, точное время визита и количество гостей в интерактивной форме.</p>
                        </section>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.head}>
                            <h1>02</h1>

                            <FaRegCheckCircle color='gray' size={'20px'}/>
                        </div>
                        <section className={styles.info}>
                            <h4>Выберите параметры</h4>
                            <p>Определите подходящую дату, точное время визита и количество гостей в интерактивной форме.</p>
                        </section>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.head}>
                            <h1>03</h1>

                            <FaRegCheckCircle color='gray' size={'20px'}/>
                        </div>
                        <section className={styles.info}>
                            <h4>Выберите параметры</h4>
                            <p>Определите подходящую дату, точное время визита и количество гостей в интерактивной форме.</p>
                        </section>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Howblock;
