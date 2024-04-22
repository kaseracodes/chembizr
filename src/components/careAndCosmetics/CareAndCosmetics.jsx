import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import styles from "./CareAndCosmetics.module.css";

const CareAndCosmetics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <img src="/images/care_cosmetics/image1.png" alt="image" />
        <h3 className={styles.heading}>Personal Care & Cosmetics</h3>
      </div>
      <div>
        <img src="/images/care_cosmetics/image2.png" alt="image" />
      </div>
      <div className={styles.rightDiv}>
        <h5 className={styles.subHeading}>Oil Consumption Across</h5>
        <p className={styles.desc}>
          North America, China, and Europe have significant oil consumption
          across different categories of lipids.
        </p>
        <Button content="Button" bgColor={COLORS.orange} />
      </div>
    </div>
  );
};

export default CareAndCosmetics;
