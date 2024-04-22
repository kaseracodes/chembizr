import styles from "./ThirdCarousel.module.css";

const ThirdCarousel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h1 className={styles.heading}>
          An Offbeat
          <br />{" "}
          <span className={styles.special}>
            Research And
            <br /> Consulting
          </span>{" "}
          Partner
        </h1>

        <p className={styles.para}>
          volutpat maecenas volutpat blandit aliquam etiam erat velit
          scelerisque in dictum non consectetur a
        </p>
      </div>

      <div className={styles.rightDiv}>
        <img src="/images/home_page_hero_3.png" alt="image" />
      </div>
    </div>
  );
};

export default ThirdCarousel;
