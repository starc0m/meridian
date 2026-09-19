import './ModalCastom.css'

const ModalCastom = ({ open, children, onClose }) => {

  return (
    <div className={`modal-container ${open ? 'open' : 'closed'}` } >
      <div className="modal-content">
        {/* close button */}
        <span onClick={onClose}
          className="close-btn" style={{
          fontSize: '24px',
          fontWeight: 'bold',
          cursor: 'pointer',
          color: 'white',
        }}>&times;</span>
        {children}



      </div>
    </div>
  );
};

export default ModalCastom;
