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
import { auth, firestore } from "../../firebase/firebase";
import { useReducer } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Modal from "../modal/Modal";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const Navbar = ({ textColor, iconColor, bgColor }) => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  var user = "";
  if (userLoggedIn) user = auth.currentUser.email;
  // console.log(user);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickLogout = () => {
    doSignOut();
  };

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setStatus("Email cannot be empty.");
      return;
    }

    function validateEmail(email) {
      // Regex pattern for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      setEmail("");
      setTimeout(() => {
        setStatus("");
      }, 2500);
      return;
    }

    try {
      const emailsRef = collection(firestore, "subscribers");
      const q = query(emailsRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // Add new email to the collection
        await addDoc(emailsRef, { email, timestamp: serverTimestamp() });
        setStatus("You have successfully subscribed!");
      } else {
        setStatus("This email is already subscribed.");
      }

      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      setStatus("An error occurred. Please try again later.");
    }
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
    <>
      <div
        className={`${styles.container} ${styles.active}`}
        style={{ backgroundColor: bgColor && bgColor }}
      >
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <img
            src={
              isScrolled || bgColor ? "/images/logo.png" : "/images/logo2.png"
            }
            alt="logo"
            className={styles.logo}
          />
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
                { desc: "Who Are We?", link: "/about-us" },
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
            )}
            <Button
              content="Subscribe"
              bgColor="#FF9B42"
              onClick={() => {
                setStatus("");
                setOpenModal(true);
              }}
            />
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
            {/* <div className={styles.icon}>
            <SearchIcon
              className={styles.icon}
              color={isScrolled || navbarOpen ? COLORS.black : textColor}
            />
          </div> */}
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

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        width="fit-content"
      >
        <div className={styles.modalContainer}>
          <h5 className={styles.modalHeading}>Subscribe to ChemBizR</h5>
          <p className={styles.modalPara}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className={styles.inputDiv}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your mail id"
              className={styles.input}
            />
            <div className={styles.btn}>
              <Button
                content="Submit"
                bgColor={COLORS.orange}
                onClick={handleSubscribe}
              />
            </div>
          </div>
          {status && <p className={styles.statusPara}>{status}</p>}
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
