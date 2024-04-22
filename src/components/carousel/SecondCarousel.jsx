import Button from "../button/Button";
import styles from "./SecondCarousel.module.css";

const SecondCarousel = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.logo}>
        <img src="/images/logo.png" alt="logo" />
      </div> */}

      {/* <Navbar /> */}

      <div className={styles.contentDiv}>
        <h1 className={styles.heading}>
          Is Your Business
          <br /> Ready for
          <br /> Taking The
          <br /> <span className={styles.special}>Sustainability</span> Leap?
        </h1>

        <p className={styles.para}>
          Remodeling corporate and market strategy for
          <br /> business growth and future transitions
        </p>

        <Button content="Speak With Us" bgColor="#FF9B42" />
      </div>
    </div>
  );
};

export default SecondCarousel;
