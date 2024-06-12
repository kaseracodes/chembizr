import { useState, useEffect } from "react";
import styles from "./CurrentOpenings.module.css";
// import { CurrentOpeningsData } from "../../assets/currentOpeningsData";
import { collection, onSnapshot, query } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import Modal from "../modal/Modal";

const CurrentOpenings = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [currentOpeningsData, setCurrentOpeningsData] = useState([]);
  const [detailsContent, setDetailsContent] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestore, "job_openings")),
      (snapshot) => {
        // const openingsData = snapshot.docs.map(doc => doc.data());
        setCurrentOpeningsData(snapshot.docs);
        console.log(snapshot.docs[0].data());
      }
    );
    return unsubscribe;
  }, []);

  useEffect(() => {
    // Update detailsContent when currentOpeningsData changes
    if (currentOpeningsData.length > 0) {
      setDetailsContent(currentOpeningsData[0].data());
      console.log(currentOpeningsData[0].data());
    }
  }, [currentOpeningsData]);

  const handleClick = (index) => {
    setActiveButton(index);
    // setDetailsContent(currentOpeningsData.length == 0 ? null : currentOpeningsData[index].data());
    setDetailsContent(currentOpeningsData[index].data());
    if (window.innerWidth <= 550) {
      setOpenModal(true);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Current Openings</h3>
      <hr className={styles.hr} />

      <div className={styles.contentDiv}>
        <div className={styles.tagDiv}>
          <div className={styles.innerTagDiv}>
            {currentOpeningsData.length > 0 &&
              currentOpeningsData.map((item, index) => (
                <button
                  className={`${styles.tagBtn} ${
                    index === activeButton ? styles.active : ""
                  }`}
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  {item.data().name}
                  {/* {item.name} */}
                </button>
              ))}
          </div>
        </div>

        <div className={styles.detailsDiv}>
          <div className={styles.innerDetailsDiv}>
            <h4 className={styles.detailsHeading}>
              {detailsContent && detailsContent.name}
            </h4>
            {detailsContent && (
              <button
                className={styles.btn}
                onClick={() => window.open(detailsContent.gform, "_blank")}
              >
                Apply
              </button>
            )}

            <div className={styles.content}>
              <h5>Overview</h5>
              <p>{detailsContent && detailsContent.overview}</p>
            </div>

            <div className={styles.content}>
              <h5>Responsibilties</h5>
              <p>{detailsContent && detailsContent.responsibilities}</p>
            </div>

            <div className={styles.content}>
              <h5>Required Qualifications</h5>
              <p>{detailsContent && detailsContent.requiredQualifications}</p>
            </div>

            <div className={styles.content}>
              <h5>Additional Qualifications</h5>
              <p>{detailsContent && detailsContent.additionalQualifications}</p>
            </div>
          </div>
        </div>

        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <div className={styles.mobileDetailsDiv}>
            <div className={styles.innerDetailsDiv}>
              <h4 className={styles.detailsHeading}>
                {detailsContent && detailsContent.name}
              </h4>
              {detailsContent && (
                <button
                  className={styles.btn}
                  onClick={() => window.open(detailsContent.gform, "_blank")}
                >
                  Apply
                </button>
              )}

              <div className={styles.content}>
                <h5>Overview</h5>
                <p>{detailsContent && detailsContent.overview}</p>
              </div>

              <div className={styles.content}>
                <h5>Responsibilties</h5>
                <p>{detailsContent && detailsContent.responsibilities}</p>
              </div>

              <div className={styles.content}>
                <h5>Required Qualifications</h5>
                <p>{detailsContent && detailsContent.requiredQualifications}</p>
              </div>

              <div className={styles.content}>
                <h5>Additional Qualifications</h5>
                <p>
                  {detailsContent && detailsContent.additionalQualifications}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CurrentOpenings;
