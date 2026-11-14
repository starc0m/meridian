import styles from './HeaderActions.module.css';


const HeaderActions = ({ setOpenModal }) => {



    return (
      <div className={styles.container}>
        <select className={styles.select}>
          <option className={styles.option} value="RU">RU</option>
          <option className={styles.option} value="EN">EN</option>
        </select>
        <div className={styles.circle}></div>
        <button className={styles.signin} onClick={() => {setOpenModal(true)}}>войти</button>
      </div>
    );
};

export default HeaderActions;
