/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./CommentSection.module.css";
import Modal from "../modal/Modal";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const CommentSection = ({ userImage, comments }) => {
  const navigate = useNavigate();
  const [commentText, setCommentText] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const ModalCard = () => {
    return (
      <div className={styles.modalContainer}>
        <p>Oops! You Need to be Logged In to be Able to Comment!</p>
        <div className={styles.modalBtnContainer}>
          <Button
            bgColor={COLORS.darkGray}
            content="Sign Up"
            onClick={() => navigate("/signup")}
          />
          <Button
            bgColor={COLORS.orange}
            content="Log In"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.container}>
        <h5 className={styles.heading}>Comments</h5>
        <div className={styles.input}>
          <img
            className={styles.profileImage}
            src={userImage}
            alt="user profile pic"
          />
          <textarea value={commentText} onChange={handleCommentChange} />
        </div>

        {commentText.trim() !== "" && (
          <div className={styles.btnDiv}>
            <button className={styles.btn1} onClick={() => setCommentText("")}>
              Cancel
            </button>
            <button className={styles.btn2} onClick={() => setOpenModal(true)}>
              Comment
            </button>
          </div>
        )}

        <div className={styles.commentsDiv}>
          {comments.map((item, index) => (
            <div key={index} className={styles.singleComment}>
              <img className={styles.profileImage} src={item.profilePic} />
              <div>
                <p className={styles.username}>{item.user}</p>
                <p className={styles.desc}>{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal open={openModal} onClose={() => setOpenModal(false)} width="700px">
        <ModalCard />
      </Modal>
    </>
  );
};

export default CommentSection;
