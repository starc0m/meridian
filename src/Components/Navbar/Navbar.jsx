import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <a href="/menu">Меню</a></li>
          <li className="nav-item">
            <a href="/about">О нас</a></li>
          <li className="nav-item">
            <a href="/booking">Бронирование</a></li>
          <li className="nav-item">
            <a href="/contact">Контакты</a></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar
