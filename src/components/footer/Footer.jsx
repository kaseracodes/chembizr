import { useNavigate } from "react-router-dom";
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
            <a href="/about-us" className={styles.anchor}>
              About Us
            </a>
            <a href="/careers" className={styles.anchor}>
              Careers
            </a>
            <a href="/news" className={styles.anchor}>
              News
            </a>
            <a href="/events" className={styles.anchor}>
              Events
            </a>
            <a href="/blogs" className={styles.anchor}>
              Blogs
            </a>
            <a href="/focus" className={styles.anchor}>
              Focus Verticals
            </a>
            <a href="/capabilities" className={styles.anchor}>
              Capabilities
            </a>
          </div>
        </div>

        <div className={styles.rightDiv}>
          <p className={styles.para}>Follow Our Socials</p>
          <div
            style={{ cursor: "pointer" }}
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
