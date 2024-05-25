import styles from "./FoodNutrition.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const FoodNutrition = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.foodContainer}>
      <div className={styles.headingContainer}>
        <h3 className={styles.foodHeading}>Food Nutrition & Beverages</h3>
      </div>
      <div className={styles.contentDiv}>
        <div className={styles.descContainer}>
          <p className={styles.desc}>
            We offer strategic insights, market assessments, and innovative
            solutions for sustainable growth and market leadership. From
            technology landscape analysis to competitive positioning, we deliver
            customized solutions, innovative ideas, resilient value chains, and
            strategic partnerships for commercial success.
          </p>
          <Button
            content="Know More"
            bgColor={COLORS.orange}
            onClick={() => navigate("/food-nutrition-and-beverages")}
          />
        </div>
        <div className={styles.foodImageContainer}>
          <img src="/images/food/image2.png" alt="image" />
          <img src="/images/food/image3.png" alt="image" />
          <img src="/images/food/image4.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default FoodNutrition;
