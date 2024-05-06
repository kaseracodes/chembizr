/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./DropDownModal.module.css";

const DropDownModal = ({ modalContents }) => {
  return (
    <div className={styles.container}>
      {modalContents.map((item, index) => (
        <Link to={item.link} className={styles.anchor} key={index}>
          {item.desc}
          {item.desc === "Industries" && (
            <div className={styles.innerLinks}>
              <Link to="/food-nutrition" className={styles.innerAnchor}>
                Food Nutrition & Beverages
              </Link>
              <Link to="/chemicals" className={styles.innerAnchor}>
                Speciality Chemicals & Polymers
              </Link>
              <Link to="/petro-chemicals" className={styles.innerAnchor}>
                Petrochemicals & Downstream
              </Link>
              <Link to="/clean-energy" className={styles.innerAnchor}>
                Clean Energy & Storage
              </Link>
              <Link to="/mobility" className={styles.innerAnchor}>
                Mobility
              </Link>
              <Link to="/personal-care" className={styles.innerAnchor}>
                Personal Care & Cosmetics
              </Link>
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default DropDownModal;
