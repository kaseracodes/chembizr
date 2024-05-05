import { Link } from "react-router-dom";
import styles from "./OTPPage.module.css";

const OTPPage = () => {
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
          <h3 className={styles.inputHeading}>Check Your Email</h3>
          <hr className={styles.hr} />
        </div>

        <div className={styles.inputDiv}>
          <label>Enter OTP</label>
          <div>
            <input type="email" placeholder="Enter OTP" />
          </div>
        </div>

        <Link to="#" className={styles.link}>
          Resend OTP in 0:59
        </Link>

        <div className={styles.btnContainer}>
          <button className={styles.btn1}>Confirm OTP</button>

          <div className={styles.line}>
            <hr /> OR <hr />
          </div>

          <button className={styles.btn2}>Signup Now</button>
        </div>

        <div>
          <h3 className={styles.inputHeading}>Or Login With</h3>
          <hr className={styles.hr} />
        </div>

        <div className={styles.socials}>
          <Link to="#">
            <img src="/images/socials/linkedin.png" alt="linkedin-image" />
          </Link>
          <Link to="#">
            <img src="/images/socials/google.png" alt="google-image" />
          </Link>
          <Link to="#">
            <img src="/images/socials/facebook.png" alt="facebook-image" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
