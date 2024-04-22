import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import styles from "./FirstCarousel.module.css";

const FirstCarousel = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h1 className={styles.heading}>
          Your offbeat
          <br /> <span className={styles.special}>Research</span> &<br />
          Management
          <br /> Consulting Partner
        </h1>

        <p className={styles.firstPara}>
          Remodeling corporate and market strategy for
          <br /> business growth and future transitions
        </p>
        <p className={styles.secondPara}>
          Market Research and Data Analytics for
          <br /> global chemical companies
        </p>

        <Button
          content="About Us"
          bgColor="#FF9B42"
          onClick={() => navigate("/about-us")}
        />
      </div>
    </div>
  );
};

export default FirstCarousel;
