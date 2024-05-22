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
        <div>
          <img
            src="/images/care_cosmetics/image2.png"
            alt="image"
            className={styles.img2}
          />
        </div>
      </div>
      <div className={styles.rightDiv}>
        <h5 className={styles.subHeading}>Oil Consumption Across</h5>
        <p className={styles.desc}>
          Elevate your presence in the cosmetic industry with our agile
          portfolio management and comprehensive insights in the active
          ingredient space. We leverage early innovation and tailored innovation
          to optimize ROI, enabling growth in the global ingredient market, like
          marine actives.
        </p>
        <Button
          content="Know More"
          bgColor={COLORS.orange}
          onClick={() => navigate("/personal-care")}
        />
      </div>
    </div>
  );
};

export default CareAndCosmetics;
