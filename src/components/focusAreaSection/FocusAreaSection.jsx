/* eslint-disable react/prop-types */
import { useState } from "react";
import { FocusAreasData } from "../../assets/focusAreas";
import styles from "./FocusAreaSection.module.css";

const FocusAreaSection = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.leftDiv}>
        <h3 className={styles.heading}>VERTICALS WE SERVE</h3>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget
          egestas purus viverra accumsan in. Aliquam nulla facilisi cras
          fermentum odio eu feugiat. Non odio euismod lacinia at quis
        </p>

        <div className={styles.cardContainer}>
          {FocusAreasData.map((item, index) => (
            <div
              key={index}
              className={styles.cardDiv}
              onClick={() => setIndex(index)}
              style={{ backgroundImage: `url(${item.imagePath})` }}
            >
              <div className={styles.innerCardDiv}>
                <p
                  className={styles.cardHeading}
                  dangerouslySetInnerHTML={{ __html: item.formattedHeading }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightDiv}>
        <img src={FocusAreasData[index].imagePath} alt="image" />
        <h5 className={styles.itemHeading}>{FocusAreasData[index].heading}</h5>
        <p className={styles.desc}>{FocusAreasData[index].description}</p>
      </div>
    </div>
  );
};

export default FocusAreaSection;
