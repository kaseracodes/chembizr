/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import LinkedinIcon from "../../svgIcons/LinkedinIcon";
import SearchIcon from "../../svgIcons/SearchIcon";
import Button from "../button/Button";
import DropdownButton from "../dropdownButton/DropdownButton";
import styles from "./Navbar.module.css";
import { COLORS } from "../../assets/constants";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { doSignOut } from "../../firebase/auth";
import { auth } from "../../firebase/firebase";
import { useReducer } from "react";


const Navbar = ({ textColor, iconColor }) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  var user = "";
  if(userLoggedIn)user = auth.currentUser.email;
  console.log(user);
  const [isScrolled, setIsScrolled] = useState(false);
  const adminemails = [ "abcde@gmail.com" , "abc@gmail.com" , "ab@gmail.com" ];

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickLogout = async () => {
    await doSignOut();
  }

  const isAdmin = (user) => {
    return adminemails.includes(user);
  }

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

      <div className={styles.rightContainer}>
        <div className={styles.dropdownContainer}>
          <DropdownButton
            textColor={!isScrolled ? textColor : COLORS.black}
            content="About"
            modalContents={[
              { desc: "Who are we?", link: "/about-us" },
              { desc: "Career", link: "/careers" },
            ]}
            index="1"
          />
          <DropdownButton
            textColor={!isScrolled ? textColor : COLORS.black}
            content="Services"
            modalContents={[
              { desc: "Industries", link: "/focus" },
              { desc: "Capabilities", link: "/capabilities" },
            ]}
            index="2"
          />
          <DropdownButton
            textColor={!isScrolled ? textColor : COLORS.black}
            content="Insights"
            modalContents={[
              { desc: "Blogs", link: "/blogs" },
              { desc: "News", link: "/news" },
              { desc: "Events", link: "/events" },
            ]}
            index="3"
          />

          {userLoggedIn && isAdmin(user) && (
            <DropdownButton
              textColor={!isScrolled ? textColor : COLORS.black}
              content="Add Insights"
              modalContents={[
                { desc: "Blogs", link: "/writeblog" },
                { desc: "News", link: "/writenews" },
                { desc: "Events", link: "/writeevent" },
                { desc: "Openings", link: "/writeopening" },
              ]}
              index="3"
            />
          )}


        </div>

        <div className={styles.buttonContainer}>

          {!userLoggedIn && (
            <Button
              content="Log in"
              bgColor="#333333"
              onClick={handleClickLogin}
            />
          )}
          {userLoggedIn && (
            <Button
              content="Log out"
              bgColor="#333333"
              onClick={handleClickLogout}
            />
          )

          }
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
            <LinkedinIcon color={!isScrolled ? iconColor : COLORS.black} />
          </div>
          <div className={styles.icon}>
            <SearchIcon
              className={styles.icon}
              color={!isScrolled ? iconColor : COLORS.black}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
