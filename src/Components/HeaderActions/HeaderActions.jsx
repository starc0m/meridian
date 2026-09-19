
import './HeaderActions.css';

const HeaderActions = ({ setOpenModal }) => {
    return (
      <div className="HeaderActions">
        <select className="select">
          <option className="option" value="RU">RU</option>
          <option className="option" value="EN">EN</option>
        </select>
        <div className="circle"></div>
        <button className="signin" onClick={() => {setOpenModal(true)}}>войти</button>
        </div>
    );
};

export default HeaderActions;
