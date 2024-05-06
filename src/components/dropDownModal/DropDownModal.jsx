/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./DropDownModal.module.css";

const DropDownModal = ({ modalContents }) => {
  return (
    <div className={styles.container}>
      {modalContents.map((item, index) => (
        <Link to={item.link} className={styles.anchor} key={index}>
          {item.desc}
          {/* {item.desc === "Industries" && (
            <div className={styles.innerLinks}>
              <Link to="/food-nutrition" className={styles.anchor}>
                Food Nutrition & Beverages
              </Link>
              <Link to="/chemicals" className={styles.anchor}>
                Speciality Chemicals & Polymers
              </Link>
              <Link to="/petrochemicals" className={styles.anchor}>
              Petrochemicals & Downstream
              </Link>
              <Link to="/food-nutrition" className={styles.anchor}>
                Food Nutrition & Beverages
              </Link>
              <Link to="/food-nutrition" className={styles.anchor}>
                Food Nutrition & Beverages
              </Link>
              <Link to="/food-nutrition" className={styles.anchor}>
                Food Nutrition & Beverages
              </Link>
            </div>
          )} */}
        </Link>
      ))}
    </div>
  );
};

export default DropDownModal;
