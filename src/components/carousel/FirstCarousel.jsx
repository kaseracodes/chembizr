/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import styles from "./FirstCarousel.module.css";

const FirstCarousel = ({ bgImage, textColor }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.contentDiv}>
        <h1 className={styles.heading} style={{ color: textColor }}>
          Your Offbeat
          <br /> <span className={styles.special}>Research</span> &<br />
          Management
          <br /> Consulting Partner
        </h1>

        <p className={styles.firstPara} style={{ color: textColor }}>
          Remodeling corporate and market strategy for
          <br /> business growth and future transitions
        </p>

        <Button
          content="Learn More"
          bgColor="#FF9B42"
          onClick={() => navigate("/about-us")}
        />
      </div>
    </div>
  );
};

export default FirstCarousel;
