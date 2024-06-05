import styles from "./ValueChain2.module.css";
import { ValueChainData } from "../../assets/valueChainData";
import ValueChainCard from "../valueChainCard/ValueChainCard";
import { COLORS } from "../../assets/constants";

const ValueChain = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Value Chain</h3>
      <div className={styles.descDiv}>
        {ValueChainData[1].description.map((item, index) => (
          <p className={styles.desc} key={index}>
            {item}
          </p>
        ))}
      </div>

      <div className={styles.cardContainer}>
        <ValueChainCard
          heading={ValueChainData[1].valueChain[0].heading}
          listItems={ValueChainData[1].valueChain[0].listItems}
          bgColor={COLORS.white}
        />

        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[1].valueChain[1].heading}
            listItems={ValueChainData[1].valueChain[1].listItems}
            bgColor={COLORS.white}
            padding="32px"
          />
          <ValueChainCard
            heading={ValueChainData[1].valueChain[2].heading}
            listItems={ValueChainData[1].valueChain[2].listItems}
            bgColor={COLORS.white}
            padding="32px"
          />
        </div>
        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[1].valueChain[3].heading}
            listItems={ValueChainData[1].valueChain[3].listItems}
            bgColor={COLORS.white}
          />
          <ValueChainCard
            heading={ValueChainData[1].valueChain[4].heading}
            listItems={ValueChainData[1].valueChain[4].listItems}
            bgColor={COLORS.white}
          />
        </div>
        <div className={styles.innerCardContainer}>
          <ValueChainCard
            heading={ValueChainData[1].valueChain[5].heading}
            listItems={ValueChainData[1].valueChain[5].listItems}
            bgColor={COLORS.white}
            padding="58px"
          />
          <ValueChainCard
            heading={ValueChainData[1].valueChain[6].heading}
            listItems={ValueChainData[1].valueChain[6].listItems}
            bgColor={COLORS.white}
            padding="58px"
          />
        </div>
      </div>
    </div>
  );
};

export default ValueChain;
