import { useNavigate } from "react-router-dom";
import styles from "./ForgotPasswordPage.module.css";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

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
          <h3 className={styles.inputHeading}>Recover Your Password</h3>
          <hr className={styles.hr} />
        </div>

        <div className={styles.inputDiv}>
          <label>Enter Your Email ID</label>
          <div>
            <input type="email" placeholder="alex@email.com" />
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.btn1}>Send OTP</button>

          <div className={styles.line}>
            <hr /> OR <hr />
          </div>

          <button className={styles.btn2} onClick={() => navigate("/signup")}>
            Signup Now
          </button>
        </div>

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

export default ForgotPasswordPage;
