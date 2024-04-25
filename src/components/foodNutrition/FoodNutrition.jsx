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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea tempor incididunt ut labore et dolore{" "}
          </p>
          <Button
            content="Know More"
            bgColor={COLORS.orange}
            onClick={() => navigate("/food-nutrition")}
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
