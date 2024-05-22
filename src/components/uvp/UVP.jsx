/* eslint-disable react/prop-types */
import Heading from "../heading/Heading";
import styles from "./UVP.module.css";
import { UVPData } from "../../assets/uvpData.js";

const Card = ({ imagePath, heading, desc }) => {
  return (
    <div className={styles.cardDiv}>
      <img src={imagePath} />
      <h5>{heading}</h5>
      <p>{desc}</p>
    </div>
  );
};

const UVP = () => {
  return (
    <div className={styles.container}>
      <Heading content="Unique Value Proposition" />

      <div className={styles.cardContainer}>
        {UVPData.map((item, index) => (
          <Card
            key={index}
            imagePath={item.imagePath}
            heading={item.heading}
            desc={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default UVP;
