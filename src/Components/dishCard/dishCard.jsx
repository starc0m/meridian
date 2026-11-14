import styles from './DishCard.module.css'; // Импорт стилей
import { HiChevronRight } from "react-icons/hi2";


const DishCard = ({
  image,
  title,
  description,
  price,
  onOrder
}) => {
  return (
    <div className={styles.card}>

        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={title}
            className={styles.image}
          />
        </div>


      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.description}>{description}</p>

        <div className={styles.footer}>
          <span className={styles.price}>
            {price.toLocaleString('ru-RU')} ₽
          </span>

          <button onClick={onOrder} className={styles.orderButton}>
            Заказать
            <HiChevronRight  size={'16px'}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
