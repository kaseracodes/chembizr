/* eslint-disable react/prop-types */
import Button from "../button/Button";
import styles from "./FocusArea.module.css";
import { COLORS } from "../../assets/constants";

const FocusArea = ({
  index,
  imagePath,
  heading,
  description,
  buttonText,
  width,
  bgColor,
}) => {
  console.log(index, imagePath, heading, description, buttonText);
  const isOdd = index % 2 !== 0;

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        flexDirection: isOdd ? "row-reverse" : "row",
        width: width,
      }}
    >
      <div className={styles.imageDiv}>
        <img src={imagePath} alt="image" />
      </div>

      <div className={styles.contentDiv} style={{ backgroundColor: bgColor }}>
        <div className={styles.innerDiv}>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.desc}>{description}</p>
          <Button content={buttonText} bgColor={COLORS.orange} />
        </div>
      </div>
    </div>
  );
};

export default FocusArea;
