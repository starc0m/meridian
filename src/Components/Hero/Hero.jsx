import DateChooser from '../DateChooser/DateChooser'
import './Hero.css'


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__title_block">
          <h6 className="hero__subtitle"> РЕСТОРАН ВЫСОКОЙ КУХНИ С СОБСТВЕННОЙ ВИНОТЕКОЙ </h6>
          <h1 className="hero__title"> Искусство гастрономии в атмосфере уединения </h1>
          <p className="hero__text"> Изысканные вкусовые сочетания, авторская подача от шеф-повара и безупречный сервис на юге исторического центра. </p>
        <DateChooser />
        </div>
      </div>
    </div>

    )
}

export default Hero
