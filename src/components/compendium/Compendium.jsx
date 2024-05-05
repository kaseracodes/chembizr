import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Compendium.module.css";
import { compendiumData } from "../../assets/compendiumData";
import CompendiumCard from "../compendiumCard/CompendiumCard";

const Compendium = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 950 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 950, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>C O M P E N D I U M</h3>
      <h5 className={styles.subHeading}>Industry Trends</h5>
      <p className={styles.desc}>
        Delving into your industry, we bring profound insights, implementable
        suggestions, the dedication and
      </p>

      <div className={styles.cardDiv}>
        <Carousel responsive={responsive}>
          {compendiumData.map((item, index) => (
            <div key={index} className={styles.innerCardDiv}>
              <CompendiumCard
                imagePath={item.imagePath}
                subHeading={item.subHeading}
                heading={item.heading}
                description={item.description}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Compendium;
