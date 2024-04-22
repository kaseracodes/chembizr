/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import styles from "./DropdownButton.module.css";
import DropDownModal from "../dropDownModal/DropDownModal";
import { COLORS } from "../../assets/constants";

const DropdownButton = ({ content, modalContents, textColor }) => {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!showModal) {
      setClicked(true);
    } else {
      setClicked(false);
    }
    setShowModal(!showModal); // Toggle the modal state on click
  };

  return (
    <div className={styles.container}>
      <button
        style={{ color: clicked ? COLORS.orange : textColor }}
        className={`${styles.btn} ${clicked ? styles.clicked : ""}`}
        onClick={handleClick}
      >
        {content}{" "}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.6668 9L10.0002 13.6667L5.3335 9"
            stroke={textColor}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      {showModal && <DropDownModal modalContents={modalContents} />}
    </div>
  );
};

export default DropdownButton;
