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
          Partner for excellence in the oil and gas industry with our downstream
          and refining consulting. From refining fuels to downstream analysis
          solutions, we provide unique insights, protect revenue, create
          decarbonization strategies, optimize processes, and drive
          transformational plans, as well as an outlook to ensure resilience in
          volatile markets.
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
