import styles from "./CareersCoreValues.module.css";

const CareersCoreValues = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Core Values of ChemCons</h3>
      <hr className={styles.hr} />
      <div className={styles.mainContainer}>
        <img src="/images/careers_core_values.png" alt="image" />

        <div>
          <div className={styles.content}>
            <h5 className={styles.contentHeading}>Innovation</h5>
            <p className={styles.desc}>
              Innovation is our driving force, fueling creativity and propelling
              us towards a brighter future.
            </p>
          </div>

          <div className={styles.content}>
            <h5 className={styles.contentHeading}>Excellence</h5>
            <p className={styles.desc}>
              We strive for perfection in every project, every interaction, and
              every outcome.
            </p>
          </div>

          <div className={styles.content}>
            <h5 className={styles.contentHeading}>Client-Focus</h5>
            <p className={styles.desc}>
              {`We listen, we understand, and we tailor our solutions to meet our
              clients' unique needs and aspirations.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersCoreValues;
