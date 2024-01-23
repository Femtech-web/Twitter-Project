/* eslint-disable react-refresh/only-export-components */

import { useState } from "react";
// import style from "../customStyles";
import { AiOutlineMenu } from "react-icons/ai";
import { FaApple, FaGooglePlay } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { useCustomState } from "../../hooks/responsive";
import MobileNavbar from "./MobileNavbar";
import styles from "./styles";

export const navLinks = [
  {
    title: "Home",
    url: "#home",
  },
  {
    title: "About us",
    url: "#about",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

const HeroSection = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [mobile] = useCustomState(setOpenNav);
  return (
    <section className={styles.heroContainer} id="home">
      <nav className={styles.navContainer}>
        <img src="/logo.png" alt="Logo" width={80} />
        {!mobile && (
          <ul className={styles.navLinksContainer}>
            {navLinks.map((link, index) => (
              <li className="hover:opacity-80" key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        )}
        {!mobile && (
          <button type="button" className={styles.btnOne}>
            Book a ride
          </button>
        )}
        {mobile && (
          <AiOutlineMenu
            onClick={() => setOpenNav(true)}
            fontSize={30}
            className="cursor-pointer"
          />
        )}
      </nav>
      <div className={styles.heroSection}>
        <div className="lg:w-[55%] w-full mt-[3%]">
          <h1 className={styles.header}>
            Ride in Style,
            <br />
            Arrive with Ease
          </h1>
          <p className={styles.subtext}>
            Experience the future of transportation with our sleek and reliable
            rides. Say goodbye to the ordinary commute and embrace a new era of
            convenience and comfort.
          </p>
          <div className="flex gap-3 items-center">
            <button type="button" className={styles.btnTwo}>
              <FaApple fontSize={25} />
              Download
            </button>
            <button type="button" className={styles.btnThree}>
              <FaGooglePlay fontSize={20} />
              Download
            </button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img
            src="/hero-picture.jpg"
            alt="rider picture"
            className={styles.img}
          />
        </div>
      </div>
      {openNav && <MobileNavbar setOpenNav={setOpenNav} />}
    </section>
  );
};

export default HeroSection;
