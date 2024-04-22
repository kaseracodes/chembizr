/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./BussinessVerticals.module.css";
import { COLORS } from "../../assets/constants";

const BussinessVerticals = ({ BussinessVerticals, buttonColor }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [buttonColors, setButtonColors] = useState(
    Array(BussinessVerticals.length).fill(buttonColor)
  );

  const handleClick = (index) => {
    setActiveButton(index);

    const newButtonColors = Array(BussinessVerticals.length).fill(buttonColor);
    newButtonColors[index] = COLORS.green;
    setButtonColors(newButtonColors);
  };

  return (
    <div className={styles.container}>
      <h5 className={styles.divHeading}>Business Verticals</h5>
      <hr className={styles.hr} />
      <div className={styles.bvDiv}>
        {BussinessVerticals.map((item, index) => (
          <button
            style={{ backgroundColor: buttonColors[index] }}
            className={`${styles.bvItem} ${
              index === activeButton ? styles.active : ""
            }`}
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BussinessVerticals;
