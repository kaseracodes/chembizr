import { Link, useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import { useAuth } from "../contexts/authContext";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { COLORS } from "../assets/constants";

const LoginPage = () => {
  const navigate = useNavigate();

  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState("");

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
      await doSignInWithEmailAndPassword(email, password)
        .then(() => {
          setIsSigningIn(true);
        })
        .catch((err) => {
          console.log(err);
          setError("Please check the credentials again !!");
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
        {userLoggedIn && <Navigate to={"/"} replace={true} />}
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
            <h3 className={styles.inputHeading}>Login To Continue!</h3>
            <hr className={styles.hr} />
          </div>

          <form onSubmit={onSubmit}>
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
                  type="text"
                  placeholder="abc#123"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </div>

            {error && <div className={styles.error}>{error}</div>}
            <button
              type="submit"
              disabled={isSigningIn}
              className={styles.btn1}
            >
              Login Now
            </button>
            <br></br>
            <a className={styles.link} href="/forgot-password">
              Forgot password
            </a>

            <div className={styles.line}>
              <hr /> OR <hr />
            </div>

            <button className={styles.btn2} onClick={() => navigate("/signup")}>
              Signup Now
            </button>
          </form>

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

export default LoginPage;
