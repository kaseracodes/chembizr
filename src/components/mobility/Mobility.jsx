import styles from "./Mobility.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const Mobility = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        {/* <h5 className={styles.subHeading}>Transitioning the acceleration</h5> */}
        <h3 className={styles.heading}>Mobility</h3>
        <p className={styles.desc}>
          Explore the future of mobility with our automotive consulting service.
          With deep expertise and a global, integrated approach, our automotive
          team tackles strategic challenges head-on. From smart materials to
          electric vehicles, we inspire innovation and reshape the competitive
          landscape, fueling growth opportunities in the modern mobility era.
        </p>
        <Button
          content="Know More"
          bgColor={COLORS.orange}
          onClick={() => navigate("/mobility")}
        />
      </div>
    </div>
  );
};

export default Mobility;
