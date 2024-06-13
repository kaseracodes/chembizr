import { Link } from "react-router-dom";
import styles from "./ResetPasswordPage.module.css";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";

const ResetPasswordPage = () => {
  return (
    <div>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />
      <div className={styles.container}>
        <div className={styles.infoDiv}>
          <h3 className={styles.infoHeading}>ChemBizR</h3>
          <p className={styles.infoDesc}>
            ChemBizR, a specialized chemical business research and consulting
            company, collaborates with global specialty chemicals, polymers,
            food & biotechnology companies to develop and execute global
            strategies and manage business complexities. Our services help
            chemical companies transform into high-performance businesses that
            can succeed in a competitive and rapidly evolving global industry.
          </p>
        </div>

        <div className={styles.rightDiv}>
          <div>
            <h3 className={styles.inputHeading}>Reset Your Password</h3>
            <hr className={styles.hr} />
          </div>

          <div className={styles.inputDiv}>
            <label>New Password</label>
            <div>
              <input type="email" placeholder="New Password" />
            </div>
          </div>

          <div className={styles.inputDiv}>
            <label>Re-Enter New Password</label>
            <div>
              <input type="email" placeholder="Re-Enter New Password" />
            </div>
          </div>

          <div className={styles.btnContainer}>
            <button className={styles.btn1}>SAVE</button>

            <div className={styles.line}>
              <hr /> OR <hr />
            </div>
          </div>

          <div>
            <h3 className={styles.inputHeading}>Or Login With</h3>
            <hr className={styles.hr} />
          </div>

          <div className={styles.socials}>
            {/* <Link to="#">
              <img src="/images/socials/linkedin.png" alt="linkedin-image" />
            </Link> */}
            <Link to="#">
              <img src="/images/socials/google.png" alt="google-image" />
            </Link>
            {/* <Link to="#">
              <img src="/images/socials/facebook.png" alt="facebook-image" />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
