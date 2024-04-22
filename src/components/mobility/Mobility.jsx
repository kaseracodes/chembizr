import styles from "./Mobility.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";

const Mobility = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h5 className={styles.subHeading}>Transitioning the acceleration</h5>
        <h3 className={styles.heading}>Mobility</h3>
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

export default Mobility;
