import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Insights.module.css";
import { PublicationsData } from "../../assets/publicationsData";
import PublicationCard from "../publicationCard/PublicationCard";
import { ArticlesData } from "../../assets/articlesData";

const Insights = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Our Insights</h1>
      <div className={styles.contentDiv}>
        <h3 className={styles.subHeading}>Publications</h3>
        <Carousel responsive={responsive}>
          {PublicationsData.map((item, index) => (
            <PublicationCard
              key={index}
              imagePath={item.imagePath}
              date={item.date}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </Carousel>
      </div>

      <div className={styles.contentDiv}>
        <h3 className={styles.subHeading}>Articles</h3>
        <Carousel responsive={responsive}>
          {ArticlesData.map((item, index) => (
            <PublicationCard
              key={index}
              imagePath={item.imagePath}
              date={item.date}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Insights;
