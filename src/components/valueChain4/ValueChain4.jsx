import styles from "./ValueChain4.module.css";
import { ValueChainData } from "../../assets/valueChainData";
import ValueChainCard from "../valueChainCard/ValueChainCard";
import { COLORS } from "../../assets/constants";

const ValueChain4 = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Value Chain</h3>
      <div className={styles.descDiv}>
        {ValueChainData[3].description.map((item, index) => (
          <p className={styles.desc} key={index}>
            {item}
          </p>
        ))}
      </div>

      <div className={styles.cardContainer}>
        <ValueChainCard
          heading={ValueChainData[3].valueChain[0].heading}
          listItems={ValueChainData[3].valueChain[0].listItems}
          bgColor={COLORS.white}
        />

        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[3].valueChain[1].heading}
            listItems={ValueChainData[3].valueChain[1].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[3].valueChain[2].heading}
            listItems={ValueChainData[3].valueChain[2].listItems}
            bgColor={COLORS.white}
          />
        </div>
        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[3].valueChain[3].heading}
            listItems={ValueChainData[3].valueChain[3].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[3].valueChain[4].heading}
            listItems={ValueChainData[3].valueChain[4].listItems}
            bgColor={COLORS.white}
          />
        </div>
        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[3].valueChain[5].heading}
            listItems={ValueChainData[3].valueChain[5].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[3].valueChain[6].heading}
            listItems={ValueChainData[3].valueChain[6].listItems}
            bgColor={COLORS.white}
          />
        </div>
      </div>
    </div>
  );
};

export default ValueChain4;
