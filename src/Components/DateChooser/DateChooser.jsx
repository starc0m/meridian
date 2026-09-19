import './DateChooser.css';

const DateChooser = () => {

  return (
    <div className="date-chooser">
      <input className="date-chooser-input" type="time" defaultValue={"17.10.2026"} />
      <input className="date-chooser-input" type="date" defaultValue={"12:00"} />
      <input className="date-chooser-input" type="number" min={1} max={10} defaultValue={1} />
      <button  className="date-chooser-button"> Заказать <img src='./src/assets/icons/Vector.png' alt="arrow" /> </button>
    </div>
  )
}

export default DateChooser;
