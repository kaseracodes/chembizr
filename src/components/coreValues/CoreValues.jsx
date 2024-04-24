/* eslint-disable react/prop-types */
import CoreValuesCard from "../coreValuesCard/CoreValuesCard";
import styles from "./CoreValues.module.css";

const CoreValues = ({ heading, cardData, hrColor }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{heading}</h3>
      <hr style={{ border: `1px solid ${hrColor}` }} />
      <div className={styles.cardContianer}>
        {cardData.map((item, index) => (
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
