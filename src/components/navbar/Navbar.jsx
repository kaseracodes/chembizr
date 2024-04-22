/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import LinkedinIcon from "../../svgIcons/LinkedinIcon";
import SearchIcon from "../../svgIcons/SearchIcon";
import Button from "../button/Button";
import DropdownButton from "../dropdownButton/DropdownButton";
import styles from "./Navbar.module.css";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";

const Navbar = ({ textColor, invertLogo, iconColor }) => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.container} ${isScrolled ? styles.active : ""}`}>
      <div>
        <img
          src="/images/logo.png"
          alt="logo"
          style={{
            filter: invertLogo && !isScrolled ? "invert(100%)" : "none",
          }}
        />
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.dropdownContainer}>
          <DropdownButton
            textColor={!isScrolled ? textColor : COLORS.white}
            content="About"
            modalContents={[
              { desc: "Who are we?", link: "about-us" },
              { desc: "Career", link: "career" },
            ]}
          />
          <DropdownButton
            textColor={!isScrolled ? textColor : COLORS.white}
            content="Services"
            modalContents={[
              { desc: "Industries", link: "focus" },
              { desc: "Capabilities", link: "capabilities" },
            ]}
          />
          <DropdownButton
            textColor={!isScrolled ? textColor : COLORS.white}
            content="Insights"
            modalContents={[
              { desc: "Blogs", link: "blogs" },
              { desc: "News", link: "news" },
              { desc: "Events", link: "events" },
            ]}
          />
        </div>

        <div className={styles.buttonContainer}>
          <Button content="Log in" bgColor="#333333" onClick={handleClick} />
          <Button content="Subscribe" bgColor="#FF9B42" />
        </div>

        <div className={styles.iconContainer}>
          <div
            className={styles.icon}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/chembizr/",
                "_blank"
              )
            }
          >
            <LinkedinIcon color={iconColor} />
          </div>
          <div className={styles.icon}>
            <SearchIcon className={styles.icon} color={iconColor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
