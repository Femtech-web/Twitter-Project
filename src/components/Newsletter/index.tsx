import { useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "./styles";
import style from "../customStyles";

const Index = () => {
  const [email, setEmail] = useState("");

  return (
    <section className={styles.sectionContainer}>
      <div className={style.header_center_two}>
        <h1 className={style.sectionHeader_two}>NEWSLETTER</h1>
        <p className={style.headerText_two}>
          Unleashing Seamless Rides and Exclusive Offers - Stay <br />
          Connected with
          <span className="text-greenTheme"> Ride</span> Newsletter!
        </p>
      </div>
      <div className={styles.input_container}>
        <input
          type="text"
          value={email}
          placeholder="Your email address"
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
        <span className={styles.icon}>
          <MdArrowForwardIos fontSize={20} color="white" />
        </span>
      </div>
    </section>
  );
};

export default Index;
