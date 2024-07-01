import styles from "./Vision.module.css";

const Vision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h3 className={styles.heading}>Our Vision</h3>
        <p className={styles.desc}>
          Our vision is to help our clients navigate market complexities using
          our strategic solutions. We aim to create a channel that leads to
          value creation and elevates our clients to industry leaders. With our
          distinct value propositions, we hope to create unique business
          solutions that serve as a driving force for sustainable technologies
          and products, assisting businesses in taking the green leap.
        </p>
      </div>
    </div>
  );
};

export default Vision;
