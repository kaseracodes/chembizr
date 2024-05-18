/* eslint-disable react/prop-types */
import styles from "./PlaceCard.module.css";

const PlaceCard = ({ imagePath, country, address, email, phone }) => {
  return (
    <div className={styles.container}>
      <img src={imagePath} alt="image" />
      <h5 className={styles.country}>{country}</h5>
      <p className={styles.address}>{address}</p>
      <div>
        <div className={styles.contacts}>
          <img src="/images/mail.png" alt="images" />
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className={styles.contacts}>
          <img src="/images/phone.png" alt="images" />
          <a className={styles.phone} href="tel:{phone}">
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
