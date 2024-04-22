import { PlacesData } from "../../assets/placesData";
import PlaceCard from "../placeCard/PlaceCard";
import styles from "./Places.module.css";

const Places = () => {
  return (
    <div className={styles.container}>
      {PlacesData.map((item, index) => (
        <PlaceCard
          key={index}
          imagePath={item.imagePath}
          country={item.country}
          address={item.address}
          email={item.email}
          phone={item.phone}
        />
      ))}
    </div>
  );
};

export default Places;
