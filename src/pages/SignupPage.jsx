import { Link } from "react-router-dom";
import styles from "./SignupPage.module.css";
import { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [error, setError] = useState("");
  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const isEmailValid = emailRegex.test(email);
    if (!isEmailValid) {
      setError("Invalid Email input !!");
      return;
    }

    const isPassValid =
      password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g) &&
      password.match(/[^a-zA-Z\d]/g) &&
      password.length >= 6;
    if (!isPassValid) {
      setError("Invalid Password !!");
      return;
    }

    if (!isSigningIn) {
      if (password !== repeatPassword) {
        setError("Passwords do not match !!");
        return;
      }

      await doCreateUserWithEmailAndPassword(email, password)
        .then(() => {
          setIsRegistered(true);
        })
        .catch((err) => {
          console.log(err);
          setError("Email is already in use !!");
        });
    }
  };

  return (
    <div>
      <Navbar
        textColor={COLORS.black}
        iconColor={COLORS.black}
        bgColor={COLORS.white}
      />
      <div className={styles.container}>
        {isRegistered && <Navigate to={"/login"} replace={true} />}
        <div className={styles.leftDiv}>
          <form onSubmit={onSubmit}>
            <div>
              <h3 className={styles.inputHeading}>Welcome to ChemBizR!</h3>
              <hr className={styles.hr} />
            </div>

            <div className={styles.inputDiv}>
              <label>Enter Your Email ID</label>
              <div>
                <input
                  type="email"
                  placeholder="alex@email.com"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className={styles.inputDiv}>
              <label>Enter Your Password</label>
              <div>
                <input
                  type="password"
                  placeholder="abc#123"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className={styles.inputDiv}>
              <label>Re-enter Your Password</label>
              <div>
                <input
                  type="password"
                  placeholder="abc#123"
                  required
                  value={repeatPassword}
                  onChange={(e) => {
                    setRepeatPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <button className={styles.btn1}>Signup</button>
          </form>

          <div>
            <h3 className={styles.inputHeading}>Or Sign Up With</h3>
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
      </div>
    </div>
  );
};

export default SignupPage;
