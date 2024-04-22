import { COLORS } from "../../assets/constants";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import Button from "../button/Button";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h3 className={styles.heading}>
          Curious about our solutions and services?
        </h3>

        <div className={styles.anchorDiv}>
          <a href="#" className={styles.anchor}>
            About Us <ArrowIcon />
          </a>
          <a href="#" className={styles.anchor}>
            Business Focus <ArrowIcon />
          </a>
          <a href="#" className={styles.anchor}>
            Careers <ArrowIcon />
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
