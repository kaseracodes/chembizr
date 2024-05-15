import styles from "./OriginStory.module.css";

const OriginStory = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="/images/origin_story.png" alt="image" />
      </div>
      <div className={styles.contentDiv}>
        <h3 className={styles.heading}>How ChemBizR Works?</h3>
        <p className={styles.desc}>
          Since the last 10 years, the team at ChemBizR has worked towards
          creating a stream of innovative solutions and growth opportunities. We
          bridge the gap between the world leaders and market opportunities that
          are hidden in plain sight. Our chemical consulting model is designed
          to tackle the problems of today. Be it sustainable value chains or
          merger and acquisition opportunities, we are growth focused.
        </p>
        <p className={styles.desc}>
          We are a trusted partner for food, polymers, personal care, clean
          energy, automotive and petrochemical sector, among others.
        </p>
      </div>
    </div>
  );
};

export default OriginStory;
