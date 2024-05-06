/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./Pagination.module.css";
import Button from "../button/Button";
import { COLORS } from "../../assets/constants";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Button
        content="Prev"
        bgColor={COLORS.orange}
        disabled={!hasPrev}
        onClick={() => navigate(`/blogs/?page=${parseInt(page) - 1}`)}
      />

      <Button
        content="Next"
        bgColor={COLORS.orange}
        disabled={!hasNext}
        onClick={() => navigate(`/blogs/?page=${parseInt(page) + 1}`)}
      />
    </div>
  );
};

export default Pagination;
