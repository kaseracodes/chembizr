/* eslint-disable react/prop-types */
import styles from "./Banner3.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const Banner3 = ({ heading, para, buttonText, imagePath, buttonLink }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <h1
          className={styles.bannerHeading}
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        />
        <p
          className={styles.bannerPara}
          dangerouslySetInnerHTML={{
            __html: para,
          }}
        />

        <Button
          content={buttonText}
          bgColor={COLORS.orange}
          onClick={() => navigate(buttonLink)}
        />
      </div>

      <div className={styles.bannerImage}>
        <img src={imagePath} alt="image" />
      </div>
    </div>
  );
};

export default Banner3;
