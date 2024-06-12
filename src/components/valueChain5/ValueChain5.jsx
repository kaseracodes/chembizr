import styles from "./ValueChain5.module.css";
import { ValueChainData } from "../../assets/valueChainData";
import ValueChainCard from "../valueChainCard/ValueChainCard";
import { COLORS } from "../../assets/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";

const ValueChain5 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1300 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1150 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1150, min: 700 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  const [showDots, setShowDots] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Value Chain</h3>
      <div className={styles.descDiv}>
        {ValueChainData[4].description.map((item, index) => (
          <p className={styles.desc} key={index}>
            {item}
          </p>
        ))}
      </div>

      <div className={styles.cardContainer}>
        <Carousel
          responsive={responsive}
          showDots={showDots}
          arrows={!showDots}
        >
          <div className={styles.innerCardContainer}>
            <ValueChainCard
              heading={ValueChainData[4].valueChain[0].heading}
              listItems={ValueChainData[4].valueChain[0].listItems}
              bgColor={COLORS.white}
              padding="87px"
            />
          </div>

          <div className={styles.innerCardContainer}>
            <ValueChainCard
              heading={ValueChainData[4].valueChain[1].heading}
              listItems={ValueChainData[4].valueChain[1].listItems}
              bgColor={COLORS.white}
              padding="32px"
            />
            <ValueChainCard
              heading={ValueChainData[4].valueChain[2].heading}
              listItems={ValueChainData[4].valueChain[2].listItems}
              bgColor={COLORS.white}
              padding="32px"
            />
          </div>
          <div className={styles.innerCardContainer}>
            <ValueChainCard
              heading={ValueChainData[4].valueChain[3].heading}
              listItems={ValueChainData[4].valueChain[3].listItems}
              bgColor={COLORS.white}
            />
            <ValueChainCard
              heading={ValueChainData[4].valueChain[4].heading}
              listItems={ValueChainData[4].valueChain[4].listItems}
              bgColor={COLORS.white}
            />
          </div>
          <div className={styles.innerCardContainer}>
            <ValueChainCard
              heading={ValueChainData[4].valueChain[5].heading}
              listItems={ValueChainData[4].valueChain[5].listItems}
              bgColor={COLORS.white}
              padding="200px"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ValueChain5;
