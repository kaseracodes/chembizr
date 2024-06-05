import { useNavigate } from "react-router-dom";
import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import styles from "./EnergyAndStorage.module.css";

const EnergyAndStorage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h3 className={styles.heading}>Clean Energy & Storage</h3>
        <div className={styles.contentDiv}>
          <div className={styles.descDiv}>
            <p className={styles.desc}>
              Unlock the potential of clean energy sources with our consulting
              services. From net-zero operations to hydrogen market strategy, we
              guide businesses through the global energy transition, leveraging
              innovative solutions for sustainability goals and growth.
            </p>
            <Button
              content="Know More"
              bgColor={COLORS.orange}
              onClick={() => navigate("/clean-energy-and-storage")}
            />
          </div>
          {/* <div className={styles.img1}>
            <img src="/images/energy_storage/image2.png" alt="image" />
          </div> */}
        </div>
      </div>
      <div className={styles.img2}>
        <img src="/images/energy_storage/image1.png" alt="image" />
      </div>
    </div>
  );
};

export default EnergyAndStorage;
