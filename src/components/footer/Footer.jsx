import { COLORS } from "../../assets/constants";
import LinkedinIcon from "../../svgIcons/LinkedinIcon";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={styles.leftDiv}>
          <img src="/images/logo.png" alt="logo" />
          <div className={styles.anchorDiv}>
            <a href="#" className={styles.anchor}>
              About Us
            </a>
            <a href="#" className={styles.anchor}>
              Careers
            </a>
            <a href="#" className={styles.anchor}>
              News
            </a>
            <a href="#" className={styles.anchor}>
              Events
            </a>
            <a href="#" className={styles.anchor}>
              Blogs
            </a>
            <a href="#" className={styles.anchor}>
              Focus Verticals
            </a>
            <a href="#" className={styles.anchor}>
              Capabilities
            </a>
          </div>
        </div>

        <div className={styles.rightDiv}>
          <p className={styles.para}>Follow Our Socials</p>
          <LinkedinIcon color={COLORS.white} />
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
