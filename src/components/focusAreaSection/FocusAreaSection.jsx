/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FocusAreasData } from "../../assets/focusAreas";
import styles from "./FocusAreaSection.module.css";
import { useNavigate } from "react-router-dom";
import Heading from "../heading/Heading";

const FocusAreaSection = () => {
  const navigate = useNavigate();
  const [itemIndex, setItemIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 300); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const handleCardClick = (index) => {
    setItemIndex(index);
    setAnimate(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftDiv}>
          <h3 className={styles.heading}>Verticals We Serve!</h3>
          <p className={styles.desc}>
            ChemBizR realizes the value of adequate industry domain knowledge
            and exposure to better evaluate client challenges and accordingly
            offer requisite solutions. Unleash customized solutions for specific
            industries, tailored to meet your business needs.
          </p>

          <div className={styles.cardContainer}>
            {FocusAreasData.map((item, index) => (
              <div
                key={index}
                className={styles.cardDiv}
                onClick={() => handleCardClick(index)}
                style={{ backgroundImage: `url(${item.imagePath})` }}
              >
                <div
                  className={`${styles.innerCardDiv} ${
                    index === itemIndex ? styles.clicked : ""
                  }`}
                >
                  <p
                    className={styles.cardHeading}
                    dangerouslySetInnerHTML={{ __html: item.formattedHeading }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${styles.rightDiv} ${animate ? styles.popOut : ""}`}
          onClick={() => navigate(FocusAreasData[itemIndex].pageLink)}
        >
          <img src={FocusAreasData[itemIndex].imagePath2} alt="image" />
          <h5 className={styles.itemHeading}>
            {FocusAreasData[itemIndex].heading}
          </h5>
          <p className={styles.desc}>{FocusAreasData[itemIndex].description}</p>
        </div>
      </div>

      <div className={styles.mobileContainer}>
        <Heading content="Verticals We Serve!" />
        <div
          className={styles.cardDiv1}
          style={{ backgroundImage: `url(${FocusAreasData[0].imagePath})` }}
          onClick={() => navigate(FocusAreasData[0].pageLink)}
        >
          <div className={styles.mobileInnerCardDiv}>
            <h5 className={styles.itemHeading}>{FocusAreasData[0].heading}</h5>
            <p className={styles.desc}>
              {FocusAreasData[0].description.slice(0, 100) + "..."}
            </p>
          </div>
        </div>

        <div className={styles.mobileInnerContainer}>
          <div
            className={styles.cardDiv2}
            style={{ backgroundImage: `url(${FocusAreasData[1].imagePath})` }}
            onClick={() => navigate(FocusAreasData[1].pageLink)}
          >
            <div className={styles.mobileInnerCardDiv}>
              <h5
                className={styles.itemHeading}
                dangerouslySetInnerHTML={{
                  __html: FocusAreasData[1].formattedHeading,
                }}
              ></h5>
              <p className={styles.desc}>
                {FocusAreasData[1].description.slice(0, 100) + "..."}
              </p>
            </div>
          </div>

          <div
            className={styles.cardDiv2}
            style={{ backgroundImage: `url(${FocusAreasData[2].imagePath})` }}
            onClick={() => navigate(FocusAreasData[2].pageLink)}
          >
            <div className={styles.mobileInnerCardDiv}>
              <h5
                className={styles.itemHeading}
                dangerouslySetInnerHTML={{
                  __html: FocusAreasData[2].formattedHeading,
                }}
              ></h5>
              <p className={styles.desc}>
                {FocusAreasData[2].description.slice(0, 100) + "..."}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.mobileInnerContainer}>
          <div
            className={styles.cardDiv2}
            style={{ backgroundImage: `url(${FocusAreasData[3].imagePath})` }}
            onClick={() => navigate(FocusAreasData[3].pageLink)}
          >
            <div className={styles.mobileInnerCardDiv}>
              <h5
                className={styles.itemHeading}
                dangerouslySetInnerHTML={{
                  __html: FocusAreasData[3].formattedHeading,
                }}
              ></h5>
              <p className={styles.desc}>
                {FocusAreasData[3].description.slice(0, 100) + "..."}
              </p>
            </div>
          </div>

          <div
            className={styles.cardDiv2}
            style={{ backgroundImage: `url(${FocusAreasData[4].imagePath})` }}
            onClick={() => navigate(FocusAreasData[4].pageLink)}
          >
            <div className={styles.mobileInnerCardDiv}>
              <h5
                className={styles.itemHeading}
                dangerouslySetInnerHTML={{
                  __html: FocusAreasData[4].formattedHeading,
                }}
              ></h5>
              <p className={styles.desc}>
                {FocusAreasData[4].description.slice(0, 100) + "..."}
              </p>
            </div>
          </div>
        </div>

        <div
          className={styles.cardDiv1}
          style={{ backgroundImage: `url(${FocusAreasData[5].imagePath})` }}
          onClick={() => navigate(FocusAreasData[5].pageLink)}
        >
          <div className={styles.mobileInnerCardDiv}>
            <h5 className={styles.itemHeading}>{FocusAreasData[5].heading}</h5>
            <p className={styles.desc}>
              {FocusAreasData[5].description.slice(0, 100) + "..."}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FocusAreaSection;
