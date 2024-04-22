import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import styles from "./EnergyAndStorage.module.css";

const EnergyAndStorage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h3 className={styles.heading}>Clean Energy & Storage</h3>
        <div className={styles.contentDiv}>
          <div className={styles.descDiv}>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea
            </p>
            <Button content="Know More" bgColor={COLORS.orange} />
          </div>
          <div className={styles.img1}>
            <img src="/images/energy_storage/image2.png" alt="image" />
          </div>
        </div>
      </div>
      <div className={styles.img2}>
        <img src="/images/energy_storage/image1.png" alt="image" />
      </div>
    </div>
  );
};

export default EnergyAndStorage;
