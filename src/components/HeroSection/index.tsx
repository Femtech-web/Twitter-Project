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

// Header Texts:
// 1. "Ride in Style, Arrive with Ease"
// 2. "Your Journey, Your Way: Seamless Rides Await"
// 3. "Elevate Your Commute: Unleash the Power of Hassle-Free Travel"
// 4. "Unlock Urban Adventure: Ride Smarter, Ride Better"
// 5. "Wherever You Go, We've Got Your Ride"

// Subtexts:
// 1. "Experience the future of transportation with our sleek and reliable rides. Say goodbye to the ordinary commute and embrace a new era of convenience and comfort."
// 2. "From doorstep to destination, our ride-sharing service is designed to make your life simpler. No more waiting, no more stress – just effortless travel at your fingertips."
// 3. "Discover a world of possibilities as you ride with us. Whether it's a quick trip to the office or a night out on the town, we're committed to making every journey as enjoyable as the destination itself."
// 4. "Efficient, eco-friendly, and effortlessly cool – that's the ride-sharing experience you deserve. Join us in revolutionizing the way you move through the cityscape."
// 5. "Your adventure begins the moment you step into our rides. Fast, friendly, and always at your service – redefine your daily commute with our ride-sharing revolution."
