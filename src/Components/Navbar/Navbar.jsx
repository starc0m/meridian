import styles from './Navbar.module.css'
import { Link } from 'react-router'

// - [ ]

const Navbar = ({col}) => {
  return (
    <>
      <nav className={styles.nav} style={{
        display: 'flex',
        flexDirection: col ? 'column' : 'row',
        paddingTop: '1px',
        paddingBottom: col ? '2rem' : '0',
        gap: '1rem',
      }} >
          <li className={styles['nav-item']}>
            <Link to="/">Главная</Link></li>
          <li className={styles['nav-item']}>
            <Link to="/menu">Меню</Link></li>
          <li className={styles['nav-item']}>
            <Link to="/about">О нас</Link></li>
          <li className={styles['nav-item']}>
            <Link to="/booking">Бронирование</Link></li>
        </nav>
    </>
  )
}

export default Navbar
