/* eslint-disable react/prop-types */
import Button from "../button/Button";
import styles from "./FocusArea.module.css";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const FocusArea = ({
  imagePath,
  heading,
  description,
  buttonText,
  bgColor,
  pageLink,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(pageLink);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageDiv}>
        <img src={imagePath} alt="image" />
      </div>

      <div className={styles.contentDiv} style={{ backgroundColor: bgColor }}>
        <div className={styles.innerDiv}>
          <h1
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Button
            onClick={handleClick}
            content={buttonText}
            bgColor={COLORS.orange}
          />
        </div>
      </div>
    </div>
  );
};

export default FocusArea;
