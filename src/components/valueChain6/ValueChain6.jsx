import styles from "./ValueChain6.module.css";

const ValueChain6 = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Value Chain</h3>
      <div className={styles.descDiv}>
        <p className={styles.desc}>
          Whether you&apos;re looking to streamline operations, transition
          toward renewable energy sources, or navigate the path toward
          decarbonization, we offer transformative strategies that propel
          businesses across the downstream value chain forward.
        </p>
        <p className={styles.desc}>
          With our unique insights and commercial expertise, we help companies
          adapt to volatile oil prices, meet consumer needs, and achieve
          specific requirements while staying ahead of industry trends.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <img src="/images/petrochemicals_value_chain.webp" alt="image" />
      </div>
    </div>
  );
};

export default ValueChain6;
