/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import styles from "./DropdownButton.module.css";
import DropDownModal from "../dropDownModal/DropDownModal";

const DropdownButton = ({ content, modalContents, textColor, index }) => {
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModal && !event.target.closest(`.button${index}`)) {
        setShowModal(false);
        setClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.btn} ${
          clicked ? styles.clicked : ""
        } button${index}`}
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {showModal && (
        <div className="modal">
          <DropDownModal
            modalContents={modalContents}
            width={content === "Services" ? "220px" : "150px"}
          />
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
