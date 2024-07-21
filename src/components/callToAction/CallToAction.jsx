import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../assets/constants";
import ArrowIcon from "../../svgIcons/ArrowIcon";
import Button from "../button/Button";
import { auth, firestore } from "../../firebase/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
  const [question, setQuestion] = useState("");
  const [user] = useAuthState(auth);

  const handleSubmitQuery = async () => {
    if (!user) {
      alert("You must be logged in to submit a query.");
      return;
    }

    if (!question.trim()) {
      alert("Query cannot be empty.");
      return;
    }

    try {
      const queryData = {
        user: user.displayName || user.email,
        question: question,
        email: user.email,
        timestamp: serverTimestamp(),
      };

      const queryRef = doc(firestore, "queries", `${user.uid}_${Date.now()}`);
      await setDoc(queryRef, queryData);

      setQuestion("");
      alert("Query submitted successfully!");
    } catch (error) {
      console.error("Error submitting query:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentDiv}>
        <h3 className={styles.heading}>
          Looking for a strategic thought partner?
        </h3>

        <div className={styles.anchorDiv}>
          <a href={`mailto:connect@chembizr.com`} className={styles.label}>
            Send us an Email <ArrowIcon color={COLORS.green} />
          </a>
          <Link to="/about-us" className={styles.anchor}>
            About Us <ArrowIcon color={COLORS.green} />
          </Link>
          <Link to="/careers" className={styles.anchor}>
            Careers <ArrowIcon color={COLORS.green} />
          </Link>
        </div>

        <div className={styles.bottomDiv}>
          <label className={styles.label}>Have Any Further Queries?</label>
          <div className={styles.inputDiv}>
            <input
              type="text"
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Feel free to share..."
              className={styles.input}
            />
            <div className={styles.btn}>
              <Button
                content="Submit"
                bgColor={COLORS.orange}
                onClick={handleSubmitQuery}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageDiv}>
        <img src="/images/call_to_action.png" />
      </div>
    </div>
  );
};

export default CallToAction;
