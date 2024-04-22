/* eslint-disable react/prop-types */
import styles from "./Modal.module.css";

const Modal = ({ onClose, open, children }) => {
  return (
    <div
      onClick={onClose}
      className={`${styles.container}
    ${open ? styles.open : ""}`}
    >
      {/* modal */}
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <button onClick={onClose} className={styles.btn}>
          <img src="/images/close_icon.png" alt="close" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
