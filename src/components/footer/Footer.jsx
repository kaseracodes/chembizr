import { Link, useNavigate } from "react-router-dom";
import { COLORS } from "../../assets/constants";
import LinkedinIcon from "../../svgIcons/LinkedinIcon";
import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.leftDiv}>
          <img
            src="/images/logo.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
          <div className={styles.anchorDiv}>
            <Link to="/about-us" className={styles.anchor}>
              About Us
            </Link>
            <Link to="/careers" className={styles.anchor}>
              Careers
            </Link>
            <Link to="/news" className={styles.anchor}>
              News
            </Link>
            <Link to="/events" className={styles.anchor}>
              Events
            </Link>
            <Link to="/insights" className={styles.anchor}>
              Insights
            </Link>
            <Link to="/focus" className={styles.anchor}>
              Industries
            </Link>
            <Link to="/capabilities" className={styles.anchor}>
              Capabilities
            </Link>
          </div>

          <div className={styles.mobileAnchorDiv}>
            <div className={styles.innerAnchorDiv}>
              <Link to="/about-us" className={styles.anchor}>
                About Us
              </Link>
              <Link to="/news" className={styles.anchor}>
                News
              </Link>
              <Link to="/focus" className={styles.anchor}>
                Industries
              </Link>
            </div>

            <div className={styles.innerAnchorDiv}>
              <Link to="/careers" className={styles.anchor}>
                Careers
              </Link>
              <Link to="/events" className={styles.anchor}>
                Events
              </Link>
              <Link to="/capabilities" className={styles.anchor}>
                Capabilities
              </Link>
            </div>

            <div className={styles.innerAnchorDiv}>
              <Link to="/blogs" className={styles.anchor}>
                Blogs
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.rightDiv}>
          <p className={styles.para}>Follow Us On</p>
          <div
            style={{ cursor: "pointer" }}
            // className={styles.icon}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/chembizr/",
                "_blank"
              )
            }
          >
            <LinkedinIcon color={COLORS.darkGray} />
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.copyrightText}>
        Copyrighted &copy; {new Date().getFullYear()} Upload by House of Development.
      </p>
    </div>
  );
};

export default Footer;
