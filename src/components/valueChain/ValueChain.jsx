import styles from "./ValueChain.module.css";
import { ValueChainData } from "../../assets/valueChainData";
import ValueChainCard from "../valueChainCard/ValueChainCard";
import { COLORS } from "../../assets/constants";

const ValueChain = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Value Chain</h3>
      <div className={styles.descDiv}>
        <p className={styles.desc}>
          Providing strategic insights and data-backed recommendations to
          businesses in the energy sector across the value chain.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <ValueChainCard
          heading={ValueChainData[0].heading}
          listItems={ValueChainData[0].listItems}
          bgColor={COLORS.white}
        />

        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[1].heading}
            listItems={ValueChainData[1].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[2].heading}
            listItems={ValueChainData[2].listItems}
            bgColor={COLORS.white}
          />
        </div>
        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[3].heading}
            listItems={ValueChainData[3].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[4].heading}
            listItems={ValueChainData[4].listItems}
            bgColor={COLORS.white}
          />
        </div>
        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[5].heading}
            listItems={ValueChainData[5].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[6].heading}
            listItems={ValueChainData[6].listItems}
            bgColor={COLORS.white}
          />
        </div>
      </div>
    </div>
  );
};

export default ValueChain;
