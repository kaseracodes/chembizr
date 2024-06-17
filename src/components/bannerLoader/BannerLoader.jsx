import { COLORS } from "../../assets/constants";
import styles from "./BannerLoader.module.css";
import MoonLoader from "react-spinners/MoonLoader";

const BannerLoader = () => {
  return (
    <div className={styles.bannerLoadingDiv}>
      <MoonLoader size="50" color={COLORS.blue} />
    </div>
  );
};

export default BannerLoader;
