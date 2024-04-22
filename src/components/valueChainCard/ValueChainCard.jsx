/* eslint-disable react/prop-types */
import styles from "./ValueChainCard.module.css";

const ValueChainCard = ({ heading, listItems, bgColor }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: bgColor }}>
      <h5 className={styles.heading}>{heading}</h5>
      <ul className={styles.list}>
        {listItems.map((item, index) => (
          <li className={styles.listItem} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueChainCard;
