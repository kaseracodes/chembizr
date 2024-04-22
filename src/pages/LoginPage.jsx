import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoDiv}>
        <h3 className={styles.infoHeading}>ChemBizR</h3>
        <p className={styles.infoDesc}>
          ChemBizR, a specialized chemical business research and consulting
          company, collaborates with global specialty chemicals, polymers, food
          & biotechnology companies to develop and execute global strategies and
          manage business complexities. Our services help chemical companies
          transform into high-performance businesses that can succeed in a
          competitive and rapidly evolving global industry.
        </p>
      </div>

      <div className={styles.rightDiv}>
        <div>
          <h3 className={styles.inputHeading}>Login To Continue!</h3>
          <hr className={styles.hr} />
        </div>

        <div className={styles.inputDiv}>
          <label>Enter Your Email ID</label>
          <div>
            <input type="email" placeholder="alex@email.com" />
          </div>
        </div>

        <div className={styles.inputDiv}>
          <label>Enter Your Password</label>
          <div>
            <input type="text" placeholder="abc#123" />
          </div>
        </div>

        <button className={styles.btn1}>Login Now</button>
        <a className={styles.link} href="/forgot-password">
          Forgot password
        </a>

        <div className={styles.line}>
          <hr /> OR <hr />
        </div>

        <button className={styles.btn2}>Signup Now</button>

        <div>
          <h3 className={styles.inputHeading}>Or Login With</h3>
          <hr className={styles.hr} />
        </div>

        <div className={styles.socials}>
          <a href="#">
            <img src="/images/socials/linkedin.png" alt="linkedin-image" />
          </a>
          <a href="#">
            <img src="/images/socials/google.png" alt="google-image" />
          </a>
          <a href="#">
            <img src="/images/socials/facebook.png" alt="facebook-image" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
