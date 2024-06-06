/* eslint-disable react/prop-types */
import styles from "./PublicationCard.module.css";

const PublicationCard = ({ imagePath, date, heading, description, short }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={imagePath} alt="image" />
      <h5 className={styles.date}>{formatDate(date)}</h5>
      <h3 className={styles.heading}>{heading.slice(0, 55) + "..."}</h3>
      {short && <p className={styles.desc}>{short.slice(0, 180) + "..."}</p>}
      {/* <div dangerouslySetInnerHTML={{ __html: description }} /> */}
    </div>
  );
};

export default PublicationCard;
