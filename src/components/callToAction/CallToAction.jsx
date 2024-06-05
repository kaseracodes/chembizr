import { Link } from "react-router-dom";
import { COLORS } from "../../assets/constants";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import Button from "../button/Button";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h3 className={styles.heading}>
          Looking for a strategic thought partner?
        </h3>

        <div className={styles.anchorDiv}>
          <Link to="/about-us" className={styles.anchor}>
            About Us <ArrowIcon color={COLORS.green} />
          </Link>
          <Link to="/careers" className={styles.anchor}>
            Careers <ArrowIcon color={COLORS.green} />
          </Link>
          <a href={`mailto:connect@chembizr.com`} className={styles.anchor}>
            Contact Us <ArrowIcon color={COLORS.green} />
          </a>
        </div>

        <div className={styles.bottomDiv}>
          <label className={styles.label}>Have Any Further Queries?</label>
          <div className={styles.inputDiv}>
            <input
              type="email"
              placeholder="Feel free to share..."
              className={styles.input}
            />
            <div className={styles.btn}>
              <Button content="Submit" bgColor={COLORS.orange} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageDiv}>
        <img src="/images/call_to_action.png" />
      </div>
    </div>
  );
};

export default CallToAction;
