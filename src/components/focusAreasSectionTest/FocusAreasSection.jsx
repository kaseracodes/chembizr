import { useNavigate } from "react-router-dom";
import { COLORS } from "../../assets/constants";
import { FocusAreasData } from "../../assets/focusAreas";
import Button from "../button/Button";
import styles from "./FocusAreasSection.module.css";

const FocusAreasSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.one}>
          <h1
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: FocusAreasData[1].heading }}
          />
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: FocusAreasData[1].description }}
          />
          <Button
            onClick={() => navigate(FocusAreasData[1].pageLink)}
            content="Know More"
            bgColor={COLORS.orange}
          />
        </div>
        <div className={styles.two}>
          <img
            src={FocusAreasData[1].imagePath}
            alt="image"
            className={styles.img}
          />
        </div>
        <div className={styles.three}>
          <img
            src={FocusAreasData[2].imagePath}
            alt="image"
            className={styles.img}
          />
        </div>
        <div className={styles.four}>
          <h1
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: FocusAreasData[2].heading }}
          />
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: FocusAreasData[2].description }}
          />
          <Button
            onClick={() => navigate(FocusAreasData[2].pageLink)}
            content="Know More"
            bgColor={COLORS.orange}
          />
        </div>
        <div className={styles.five}>
          <h1
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: FocusAreasData[3].heading }}
          />
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: FocusAreasData[3].description }}
          />
          <Button
            onClick={() => navigate(FocusAreasData[3].pageLink)}
            content="Know More"
            bgColor={COLORS.orange}
          />
        </div>
        <div className={styles.six}>
          <img
            src={FocusAreasData[3].imagePath}
            alt="image"
            className={styles.img}
          />
        </div>
        <div className={styles.seven}>
          <img
            src={FocusAreasData[4].imagePath}
            alt="image"
            className={styles.img}
          />
        </div>
        <div className={styles.eight}>
          <h1
            className={styles.heading}
            dangerouslySetInnerHTML={{ __html: FocusAreasData[4].heading }}
          />
          <p
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: FocusAreasData[4].description }}
          />
          <Button
            onClick={() => navigate(FocusAreasData[4].pageLink)}
            content="Know More"
            bgColor={COLORS.orange}
          />
        </div>
      </div>
    </div>
  );
};

export default FocusAreasSection;
