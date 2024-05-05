import { Link } from "react-router-dom";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <div>
          <h3 className={styles.inputHeading}>Welcome to ChemBizR!</h3>
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

        <div className={styles.inputDiv}>
          <label>Re Enter Your Password</label>
          <div>
            <input type="text" placeholder="abc#123" />
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.btn1}>Signup</button>
        </div>

        <div>
          <h3 className={styles.inputHeading}>Or Sign Up With</h3>
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
    </div>
  );
};

export default SignupPage;
