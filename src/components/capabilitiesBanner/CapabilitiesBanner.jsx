/* eslint-disable react/prop-types */
import styles from "./CapabilitiesBanner.module.css";

const CapabilitiesBanner = ({ imagePath }) => {
  return (
    <div
      className={styles.bannerContainer}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.bannerContentDiv}>
        <h1 className={styles.bannerHeading}>
          <span className={styles.bannerSpecial}>
            ChemBizR’s Capabilities:
            <br />
          </span>
          Your Ultimate Solution-driven Partner
        </h1>

        <p className={styles.bannerPara}>
          We offer value-driven application-specific knowledge to better
          evaluate client challenges and accordingly offer the requisite
          solutions.
        </p>
      </div>
    </div>
  );
};

export default CapabilitiesBanner;
