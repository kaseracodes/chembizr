/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./DropDownModal.module.css";

const DropDownModal = ({ modalContents, width }) => {
  return (
    <div className={styles.container} style={{ width: width }}>
      {modalContents.map((item, index) => (
        <Link to={item.link} className={styles.anchor} key={index}>
          {item.desc}
          {item.desc === "Industries" && (
            <div className={styles.innerLinks}>
              <Link
                to="/food-nutrition-and-beverages"
                className={styles.innerAnchor}
              >
                Food Nutrition & Beverages
              </Link>
              <Link to="/specialty-polymers" className={styles.innerAnchor}>
                Specialty Polymers
              </Link>
              <Link
                to="/petro-chemicals-and-downstream"
                className={styles.innerAnchor}
              >
                Petrochemicals & Downstream
              </Link>
              <Link
                to="/clean-energy-and-storage"
                className={styles.innerAnchor}
              >
                Clean Energy & Storage
              </Link>
              <Link to="/mobility" className={styles.innerAnchor}>
                Mobility
              </Link>
              <Link
                to="/personal-care-and-cosmetics"
                className={styles.innerAnchor}
              >
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
