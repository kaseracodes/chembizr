/* eslint-disable react/prop-types */
import styles from "./DropDownModal.module.css";

const DropDownModal = ({ modalContents }) => {
  return (
    <div className={styles.container}>
      {modalContents.map((item, index) => (
        <a href={item.link} className={styles.anchor} key={index}>
          {item.desc}
        </a>
      ))}
    </div>
  );
};

export default DropDownModal;
