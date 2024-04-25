import styles from "./PetroChemicals.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const PetroChemicals = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.petroChemicalsContainer}>
      <div className={styles.petroChemicalsContentDiv}>
        <h3 className={styles.petroChemicalsHeading}>
          Petrochemicals & Downstream
        </h3>
        <p className={styles.petroChemicalsDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea tempor incididunt ut labore et dolore , quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea tempor incididunt
          ut labore et dolore
        </p>
        <Button
          content="Read More"
          bgColor={COLORS.orange}
          onClick={() => navigate("/petro-chemicals")}
        />
      </div>
    </div>
  );
};

export default PetroChemicals;
