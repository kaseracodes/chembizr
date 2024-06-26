/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../assets/constants";
import GreaterThanIcon from "../../svgIcons/GreaterThanIcon";
import styles from "./CapabilitiesCard.module.css";

const CapabilitiesCard = ({ imagePath, heading, description, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/capabilities#${id}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.imageDiv}>
          <img src={imagePath} alt="image" />
        </div>

        <div className={styles.contentDiv}>
          <h3
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h3>
          <p className={styles.desc}>{description}</p>
        </div>
      </div>
      <button className={styles.btn} onClick={handleClick}>
        Read More <GreaterThanIcon color={COLORS.green} />
      </button>
    </div>
  );
};

export default CapabilitiesCard;
