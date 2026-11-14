import styles from './Footer.module.css';
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>

        {/* Колонка 1: Логотип и описание */}
        <div className={styles.brandColumn}>
          <h2 className={styles.logo}>МЕРИДИАН</h2>
          <p className={styles.description}>
            Премиальный гастрономический ресторан в самом центре города.
            Авторская кухня, винный погреб и незабываемая атмосфера уюта.
          </p>
          <div className={styles.socials}>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              <FaInstagram size={'24px'}/>
            </a>
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className={styles.socialLink}>
              <FaWhatsapp size={'24px'}/>
            </a>
            {/* Telegram */}
            <a href="#" aria-label="Telegram" className={styles.socialLink}>
              <FaTelegramPlane size={'24px'} />
            </a>
          </div>
        </div>

        {/* Контакты */}
        <div className={styles.infoColumn}>
          <h3 className={styles.columnTitle}>КОНТАКТЫ</h3>
          <a href="tel:+74951234567" className={styles.highlightLink}>+7 (495) 123-45-67</a>
          <a href="mailto:info@meridian-restaurant.ru" className={styles.textLink}>info@meridian-restaurant.ru</a>
          <p className={styles.text}>ул. Пятницкая, дом 24, Москва</p>
        </div>

        {/* Время работы */}
        <div className={styles.infoColumn}>
          <h3 className={styles.columnTitle}>ВРЕМЯ РАБОТЫ</h3>
          <p className={styles.text}>Вс - Чт: 12:00 - 23:00</p>
          <p className={styles.text}>Пт - Сб: 12:00 - 01:00</p>
          <p className={styles.highlightText}>Кухня работает до 22:30</p>
        </div>

      </div>

      <hr className={styles.divider} />

      <div className={styles.bottomSection}>
        <p className={styles.copyright}>
          © 2024 Ресторан «Меридиан». Все права защищены
        </p>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>Политика конфиденциальности</a>
          <a href="#" className={styles.legalLink}>Правила бронирования</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
