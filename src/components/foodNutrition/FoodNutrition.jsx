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
            We offer the right strategic fit for finding alternative 
            ingredients and products to beat the inflation effect in 
            the food industry via new innovations. Our strategies 
            can help ingredient manufacturers become market leaders 
            and challenge competitive threats. From technology 
            landscape analysis to vertical integration, we create 
            resilient value chains to enhance market penetration for ingredients.
          </p>
          <Button
            content="Know More"
            bgColor={COLORS.orange}
            onClick={() => navigate("/food-nutrition-and-beverages")}
          />
        </div>
        <div className={styles.foodImageContainer}>
          {/* <img src="/images/food/image2.png" alt="image" /> */}
          <img src="/images/food/image3.png" alt="image" />
          <img src="/images/food/image4.png" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default FoodNutrition;
