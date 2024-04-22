/* eslint-disable react/prop-types */
import { COLORS } from "../../assets/constants";
import Button from "../button/Button";
import styles from "./Banner.module.css";

const Banner = ({
  imagePath,
  heading,
  para,
  boldPara,
  buttonText,
  textColor,
  contentWidth,
}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className={styles.contentDiv} style={{ width: contentWidth }}>
        <h1 className={styles.heading} style={{ color: textColor }}>
          {heading}
        </h1>

        {boldPara && (
          <p className={styles.boldPara} style={{ color: textColor }}>
            {boldPara}
          </p>
        )}
        <p className={styles.para} style={{ color: textColor }}>
          {para}
        </p>

        <Button content={buttonText} bgColor={COLORS.orange} />
      </div>
    </div>
  );
};

export default Banner;
