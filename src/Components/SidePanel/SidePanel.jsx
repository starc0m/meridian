import { createPortal } from 'react-dom'
import { useEffect } from 'react'

import HeaderActions from '../HeaderActions/HeaderActions'
import Navbar from '../Navbar/Navbar'

import styles from './SidePanel.module.css'

const SidePanel = ({ open, onClose, setOpenModal }) => {

  useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1050) {
          onClose();
        }
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, [onClose]);


  return (
    createPortal(
      <div id='BG' className={styles.background} onClick={onClose} style={{ pointerEvents: open ? 'auto' : 'none' }}>
        <aside onClick={(e)=> e.stopPropagation()} className={`${styles.sidePanel} ${styles[open ? 'open' : 'closed']}`} >
          <span className={styles[open ? '' : 'closeButton']} style={{
            fontSize: '24px',
            color: 'white',
            position: 'absolute',
            cursor: 'pointer',
            top: '10px',
            right: '10px',
          }} onClick={onClose}>&times;</span>
          <div>
            <Navbar col={true} />
            <HeaderActions setOpenModal={setOpenModal}  />
          </div>
        </aside>
      </div>, document.body)

  )
}

export default SidePanel
