import styles from "./FindUs.module.css";

const FindUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h3 className={styles.heading}>We Are There For You Globally!</h3>
        <p className={styles.desc}>
          ChemBizR has a global presence with consultants base spread across
          continents apart from having offices in North America and Asia. It
          ensures that there is close coordination between consultants and
          clients. All our client engagements require regional and domain
          capabilities, both of which are among the fascinating value
          proposition offered by ChemBizR.
        </p>
      </div>
      <img src="/images/find_us.png" />
    </div>
  );
};

export default FindUs;
