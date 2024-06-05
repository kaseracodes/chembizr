import { useNavigate } from "react-router-dom";
import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import styles from "./CareAndCosmetics.module.css";

const CareAndCosmetics = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.leftDiv}>
          <img
            src="/images/care_cosmetics/image1.png"
            alt="image"
            className={styles.img1}
          />
          <h3 className={styles.heading}>Personal Care & Cosmetics</h3>
        </div>
        <div className={styles.img2Div}>
          <img
            src="/images/care_cosmetics/image2.png"
            alt="image"
            className={styles.img2}
          />
        </div>
      </div>
      <div className={styles.rightDiv}>
        {/* <h5 className={styles.subHeading}>Oil Consumption Across</h5> */}
        <p className={styles.desc}>
        We leverage our expertise in chemicals and ingredients to identify 
        novel solutions in bio-based, marine, and plant-based categories, 
        among others. Our consultants offer comprehensive insights into 
        the ingredient formulation market, assisting chemical companies 
        and ingredient formulators as well as manufacturers in the personal 
        care and cosmetics space to achieve market dominance.
        </p>
        <Button
          content="Know More"
          bgColor={COLORS.orange}
          onClick={() => navigate("/personal-care-and-cosmetics")}
        />
      </div>
    </div>
  );
};

export default CareAndCosmetics;
