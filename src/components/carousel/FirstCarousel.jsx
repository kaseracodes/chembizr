import Button from "../button/Button";
import styles from "./FirstCarousel.module.css";

const FirstCarousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h1 className={styles.heading}>
          Your offbeat
          <br /> <span className={styles.special}>Research</span> &<br />
          Management
          <br /> Consulting Partner
        </h1>

        <p className={styles.firstPara}>
          Remodeling corporate and market strategy for
          <br /> business growth and future transitions
        </p>
        <p className={styles.secondPara}>
          Market Research and Data Analytics for
          <br /> global chemical companies
        </p>

        <Button content="About Us" bgColor="#FF9B42" />
      </div>
    </div>
  );
};

export default FirstCarousel;
