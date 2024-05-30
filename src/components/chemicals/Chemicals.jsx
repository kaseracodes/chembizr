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
        {/* <h5 className={styles.chemicalsSubHeading}>Lorem ipsum dolor</h5> */}
        <p className={styles.desc}>
          Navigate the market complexities of the polymer industry, optimize
          margins, and drive sustainable growth with our strategic approach. We
          provide expert advice on sustainability, material specifications, and
          valid alternatives. Achieve compliance, and a sustainable portfolio to
          unlock lucrative growth opportunities with our polymer consulting
          services.
        </p>
        <Button
          content="Know More"
          bgColor={COLORS.orange}
          onClick={() => navigate("/speciality-polymers")}
        />
      </div>
    </div>
  );
};

export default Chemicals;
