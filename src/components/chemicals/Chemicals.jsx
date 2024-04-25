import styles from "./Chemicals.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const Chemicals = () => {
  const navigate = useNavigate();

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
        <Button
          content="Know More"
          bgColor={COLORS.orange}
          onClick={() => navigate("/chemicals")}
        />
      </div>
    </div>
  );
};

export default Chemicals;
