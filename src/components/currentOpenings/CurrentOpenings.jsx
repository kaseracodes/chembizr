import { useState } from "react";
import styles from "./CurrentOpenings.module.css";
import { CurrentOpeningsData } from "../../assets/currentOpeningsData";

const CurrentOpenings = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [detailsContent, setDetailsContent] = useState(
    CurrentOpeningsData && CurrentOpeningsData[0]
  );

  const handleClick = (index) => {
    setActiveButton(index);
    setDetailsContent(CurrentOpeningsData && CurrentOpeningsData[index]);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Current Openings</h3>
      <hr className={styles.hr} />

      <div className={styles.contentDiv}>
        <div className={styles.tagDiv}>
          <div className={styles.innerTagDiv}>
            {CurrentOpeningsData.map((item, index) => (
              <button
                className={`${styles.tagBtn} ${
                  index === activeButton ? styles.active : ""
                }`}
                key={index}
                onClick={() => handleClick(index)}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.detailsDiv}>
          <div className={styles.innerDetailsDiv}>
            <h4 className={styles.detailsHeading}>
              {detailsContent && detailsContent.name}
            </h4>
            <button className={styles.btn}>Apply</button>

            <div className={styles.content}>
              <h5>Overview</h5>
              <p>{detailsContent && detailsContent.overview}</p>
            </div>

            <div className={styles.content}>
              <h5>Responsibilties</h5>
              <p>{detailsContent && detailsContent.responsibilities}</p>
            </div>

            <div className={styles.content}>
              <h5>Required Qualifications</h5>
              <p>{detailsContent && detailsContent.requiredQualifications}</p>
            </div>

            <div className={styles.content}>
              <h5>Additional Qualifications</h5>
              <p>{detailsContent && detailsContent.additionalQualifications}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentOpenings;
