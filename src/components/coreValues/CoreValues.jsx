import { CoreValuesData } from "../../assets/coreValuesData";
import CoreValuesCard from "../coreValuesCard/CoreValuesCard";
import styles from "./CoreValues.module.css";

const CoreValues = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Our Teaming Principles</h3>
      <hr />
      <div className={styles.cardContianer}>
        {CoreValuesData.map((item, index) => (
          <CoreValuesCard
            key={index}
            imagePath={item.imagePath}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
