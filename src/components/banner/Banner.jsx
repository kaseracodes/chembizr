/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
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
  buttonLink,
  headingFontSize,
  headingFontWeight,
  headingMarginTop,
  headingLineHeight,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className={styles.contentDiv} style={{ width: contentWidth }}>
        <h1
          className={styles.heading}
          style={{
            color: textColor,
            fontSize: headingFontSize,
            fontWeight: headingFontWeight,
            marginTop: headingMarginTop,
            lineHeight: headingLineHeight,
          }}
          dangerouslySetInnerHTML={{ __html: heading }}
        />

        {boldPara && (
          <p
            className={styles.boldPara}
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: boldPara }}
          />
        )}
        <p
          className={styles.para}
          style={{ color: textColor }}
          dangerouslySetInnerHTML={{ __html: para }}
        />

        <Button
          content={buttonText}
          bgColor={COLORS.orange}
          onClick={() => navigate(buttonLink)}
        />
      </div>
    </div>
  );
};

export default Banner;
