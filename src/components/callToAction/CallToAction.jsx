import { COLORS } from "../../assets/constants";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import Button from "../button/Button";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h3 className={styles.heading}>
          Curious about our
          <br /> solutions and services?
        </h3>

        <div className={styles.anchorDiv}>
          <a href="/about-us" className={styles.anchor}>
            About Us <ArrowIcon color={COLORS.green} />
          </a>
          <a href="/focus" className={styles.anchor}>
            Business Focus <ArrowIcon color={COLORS.green} />
          </a>
          <a href="/careers" className={styles.anchor}>
            Careers <ArrowIcon color={COLORS.green} />
          </a>
        </div>

        <div className={styles.bottomDiv}>
          <label className={styles.label}>Subscribe to our newsletter!</label>
          <div className={styles.inputDiv}>
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
            />
            <Button content="Submit" bgColor={COLORS.orange} />
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
