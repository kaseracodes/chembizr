/* eslint-disable react/prop-types */
import styles from "./CapabilitiesBanner.module.css";

const CapabilitiesBanner = ({ imagePath }) => {
  return (
    <div
      className={styles.bannerContainer}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.bannerContentDiv}>
        <h1 className={styles.bannerHeading}>
          <span className={styles.bannerSpecial}>
            ChemBizR’s Capabilities:
            <br />
          </span>
          Your ultimate solution-driven partners
        </h1>

        <p className={styles.bannerPara}>
          We realize the value of adequate application-specific knowledge and
          exposure to better evaluate client challenges and accordingly offer
          the requisite solutions.
        </p>
      </div>
    </div>
  );
};

export default CapabilitiesBanner;
