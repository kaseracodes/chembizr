import styles from "./Chemicals.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";

const Chemicals = () => {
  return (
    <div className={styles.chemicalsContainer}>
      <div className={styles.chemicalsImageContainer}>
        <img src="/images/chemicals.png" alt="image" />
      </div>
      <div className={styles.chemicalsContentDiv}>
        <h3 className={styles.chemicalsHeading}>
          Speciality Chemicals & Polymers
        </h3>
        <h5 className={styles.chemicalsSubHeading}>Lorem ipsum dolor</h5>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea tempor incididunt ut labore et dolore , quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea tempor incididunt
          ut labore et dolore
        </p>
        <Button content="Button" bgColor={COLORS.orange} />
      </div>
    </div>
  );
};

export default Chemicals;
