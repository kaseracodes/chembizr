/* eslint-disable react/prop-types */
import styles from "./Banner2.module.css";

const Banner2 = ({ imagePath, heading }) => {
  // return (
  //   <div
  //     className={styles.container}
  //     style={{ backgroundImage: `url(${imagePath})` }}
  //   >
  //     <h1 className={styles.heading}>{heading}</h1>
  //   </div>
  // );
  return (
    <div>
      {imagePath && (
        <img height="700px" width="1300px" src={imagePath} alt="img" />
      )}
      <h1 className={styles.heading}>
      {heading}
      </h1>
    </div>
    
  );
};

export default Banner2;
