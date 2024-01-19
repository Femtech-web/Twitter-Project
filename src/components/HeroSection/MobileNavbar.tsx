"use client";

import { Dispatch, SetStateAction } from "react";
// import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from ".";
import styles from "./styles";

interface Props {
  setOpenNav: Dispatch<SetStateAction<boolean>>;
}

const MobileNavbar = ({ setOpenNav }: Props) => {
  const handleClick = () => {
    setOpenNav(false);
  };

  return (
    <div className={styles.mobileNavCont}>
      <div className={styles.closeNavCont}>
        <AiOutlineClose
          fontSize={25}
          className="cursor-pointer"
          onClick={() => setOpenNav(false)}
        />
      </div>
      <div className="text-center">
        <ul className={styles.mobileNavlinks}>
          {navLinks.map((link, index) => (
            <li className="hover:opacity-80" key={index} onClick={handleClick}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center items-center">
          <button type="button" className={styles.btnThree}>
            Book a ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
