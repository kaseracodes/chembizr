/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import LinkedinIcon from "../../svgIcons/LinkedinIcon";
import SearchIcon from "../../svgIcons/SearchIcon";
import Button from "../button/Button";
import DropdownButton from "../dropdownButton/DropdownButton";
import styles from "./Navbar.module.css";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ textColor, iconColor }) => {
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => {
    navigate("/login");
  };

  const showNavbar = () => {
    // navRef.current.classList.toggle("responsive_nav");
    setNavbarOpen(!navbarOpen);
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
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src="/images/logo.png" alt="logo" className={styles.logo} />
      </div>

      <div
        className={`${styles.rightContainer} ${
          navbarOpen ? styles.responsive_nav : ""
        }`}
      >
        <div className={styles.dropdownContainer}>
          <DropdownButton
            textColor={isScrolled || navbarOpen ? COLORS.black : textColor}
            content="About"
            modalContents={[
              { desc: "Who are we?", link: "/about-us" },
              { desc: "Career", link: "/careers" },
            ]}
            index="1"
          />
          <DropdownButton
            textColor={isScrolled || navbarOpen ? COLORS.black : textColor}
            content="Services"
            modalContents={[
              { desc: "Industries", link: "/focus" },
              { desc: "Capabilities", link: "/capabilities" },
            ]}
            index="2"
          />
          <DropdownButton
            textColor={isScrolled || navbarOpen ? COLORS.black : textColor}
            content="Insights"
            modalContents={[
              { desc: "Blogs", link: "/blogs" },
              { desc: "News", link: "/news" },
              { desc: "Events", link: "/events" },
            ]}
            index="3"
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
            <LinkedinIcon
              color={isScrolled || navbarOpen ? COLORS.black : textColor}
            />
          </div>
          <div className={styles.icon}>
            <SearchIcon
              className={styles.icon}
              color={isScrolled || navbarOpen ? COLORS.black : textColor}
            />
          </div>
        </div>

        <button
          className={`${styles.faIcon} ${styles.closeBtn}`}
          style={{ color: COLORS.black }}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </div>

      <button
        className={styles.faIcon}
        style={{ color: !isScrolled ? iconColor : COLORS.black }}
        onClick={showNavbar}
      >
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
