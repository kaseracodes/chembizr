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
            <Link to="/blogs" className={styles.anchor}>
              Blogs
            </Link>
            <Link to="/focus" className={styles.anchor}>
              Focus Verticals
            </Link>
            <Link to="/capabilities" className={styles.anchor}>
              Capabilities
            </Link>
          </div>
        </div>

        <div className={styles.rightDiv}>
          <p className={styles.para}>Follow Our Socials</p>
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
            <LinkedinIcon color={COLORS.white} />
          </div>
        </div>
      </div>
      <hr />
      <p className={styles.copyrightText}>
        Non Copyrighted &copy; {new Date().getFullYear()} Upload by rich
        technologies
      </p>
    </div>
  );
};

export default Footer;
