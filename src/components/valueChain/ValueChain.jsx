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
          heading={ValueChainData[0].valueChain1[0].heading}
          listItems={ValueChainData[0].valueChain1[0].listItems}
          bgColor={COLORS.white}
        />

        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[0].valueChain1[1].heading}
            listItems={ValueChainData[0].valueChain1[1].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[0].valueChain1[2].heading}
            listItems={ValueChainData[0].valueChain1[2].listItems}
            bgColor={COLORS.white}
          />
        </div>
        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[0].valueChain1[3].heading}
            listItems={ValueChainData[0].valueChain1[3].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[0].valueChain1[4].heading}
            listItems={ValueChainData[0].valueChain1[4].listItems}
            bgColor={COLORS.white}
          />
        </div>
        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[0].valueChain1[5].heading}
            listItems={ValueChainData[0].valueChain1[5].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[0].valueChain1[6].heading}
            listItems={ValueChainData[0].valueChain1[6].listItems}
            bgColor={COLORS.white}
          />
        </div>
      </div>
    </div>
  );
};

export default ValueChain;
